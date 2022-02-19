import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFaqInput } from '../dto/inputs/create-faq.input';
import { FaqResponse } from '../dto/responses/faq.response';
import { GetAllFaqInput } from '../dto/inputs/get-all-faq.input';
import { DeleteFaqInput } from '../dto/inputs/delete-faq.input';
import { CreateFaqCommand } from '../../cqrs/commands/impl/create-faq.command';
import { DeleteFaqCommand } from '../../cqrs/commands/impl/delete-faq.command';
import { GetAllFaqQuery } from '../../cqrs/queries/impl/get-all-faq.query';
import { FaqMapper } from '../../mapper/faq.mapper';
import { UpdateFaqInput } from '../dto/inputs/update-faq.input';
import { UpdateFaqCommand } from '../../cqrs/commands/impl/update-faq.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFaqInput } from '../dto/inputs/get-paginated-faq.input';
import { PaginatedFaqResponse } from '../dto/responses/paginated-faq.response';
import { GetPaginatedFaqQuery } from '../../cqrs/queries/impl/get-paginated-faq.query';
import { GetOneFaqInput } from '../dto/inputs/get-one-faq.input';
import { GetOneFaqQuery } from '../../cqrs/queries/impl/get-one-faq.query';
import { DeleteManyFaqInput } from '../dto/inputs/delete-many-faq.input';
import { DeleteManyFaqCommand } from '../../cqrs/commands/impl/delete-many-faq.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FaqEntity } from '../../entities/faq.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => FaqResponse)
export class FaqResolver extends BaseResolver {
  constructor(
    private readonly _faqMapper: FaqMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFaq(
    @Args('input') input: CreateFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFaqCommand(
      this._faqMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFaq(
    @Args('input') { update, entityId }: UpdateFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFaqCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFaq(
    @Args('input') { entityId }: DeleteFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFaqCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFaq(
    @Args('input') input: DeleteManyFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFaqCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FaqResponse])
  async getAllFaq(
    @Args('input', { nullable: true }) input: GetAllFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FaqResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FaqEntity>>>(new GetAllFaqQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._faqMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => FaqResponse, { nullable: true })
  async getOneFaq(
    @Args('input', { nullable: true }) input: GetOneFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FaqResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FaqEntity>>(new GetOneFaqQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._faqMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFaqResponse, { nullable: true })
  async getPaginatedFaq(
    @Args('input', { nullable: true }) input: GetPaginatedFaqInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFaqResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FaqEntity>>>(new GetPaginatedFaqQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._faqMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FAQ'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [FaqResponse])
  async getAllFaqOwn(
    @Args('input', { nullable: true }) input: GetAllFaqInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FaqResponse>> {
    return this.getAllFaq({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FAQ'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedFaqResponse, { nullable: true })
  async getPaginatedFaqOwn(
    @Args('input', { nullable: true }) input: GetPaginatedFaqInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedFaqResponse> {
    return this.getPaginatedFaq({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: FaqResponse): Promise<SolvedEntityResponse> {
    if (parent?.createdBy) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.createdBy.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }
      const user = userOrErr.unwrap();
      return {
        id: user.id,
        entityName: UserEntity.name,
        identifier: `${user.firstname} ${user?.lastname}`,
        fields: [
          {
            field: 'username',
            value: user?.username,
          },
        ],
      };
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async updatedBy(@Parent() parent?: FaqResponse): Promise<SolvedEntityResponse> {
    if (parent?.updatedBy) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.updatedBy.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }
      const user = userOrErr.unwrap();
      return {
        id: user.id,
        entityName: UserEntity.name,
        identifier: `${user.firstname} ${user?.lastname}`,
        fields: [
          {
            field: 'username',
            value: user?.username,
          },
        ],
      };
    }
  }



}

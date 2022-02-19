import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFaqCategoryInput } from '../dto/inputs/create-faq-category.input';
import { FaqCategoryResponse } from '../dto/responses/faq-category.response';
import { GetAllFaqCategoryInput } from '../dto/inputs/get-all-faq-category.input';
import { DeleteFaqCategoryInput } from '../dto/inputs/delete-faq-category.input';
import { CreateFaqCategoryCommand } from '../../cqrs/commands/impl/create-faq-category.command';
import { DeleteFaqCategoryCommand } from '../../cqrs/commands/impl/delete-faq-category.command';
import { GetAllFaqCategoryQuery } from '../../cqrs/queries/impl/get-all-faq-category.query';
import { FaqCategoryMapper } from '../../mapper/faq-category.mapper';
import { UpdateFaqCategoryInput } from '../dto/inputs/update-faq-category.input';
import { UpdateFaqCategoryCommand } from '../../cqrs/commands/impl/update-faq-category.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFaqCategoryInput } from '../dto/inputs/get-paginated-faq-category.input';
import { PaginatedFaqCategoryResponse } from '../dto/responses/paginated-faq-category.response';
import { GetPaginatedFaqCategoryQuery } from '../../cqrs/queries/impl/get-paginated-faq-category.query';
import { GetOneFaqCategoryInput } from '../dto/inputs/get-one-faq-category.input';
import { GetOneFaqCategoryQuery } from '../../cqrs/queries/impl/get-one-faq-category.query';
import { DeleteManyFaqCategoryInput } from '../dto/inputs/delete-many-faq-category.input';
import { DeleteManyFaqCategoryCommand } from '../../cqrs/commands/impl/delete-many-faq-category.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FaqCategoryEntity } from '../../entities/faq-category.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => FaqCategoryResponse)
export class FaqCategoryResolver extends BaseResolver {
  constructor(
    private readonly _faqCategoryMapper: FaqCategoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFaqCategory(
    @Args('input') input: CreateFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFaqCategoryCommand(
      this._faqCategoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFaqCategory(
    @Args('input') { update, entityId }: UpdateFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFaqCategoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFaqCategory(
    @Args('input') { entityId }: DeleteFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFaqCategoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFaqCategory(
    @Args('input') input: DeleteManyFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFaqCategoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FaqCategoryResponse])
  async getAllFaqCategory(
    @Args('input', { nullable: true }) input: GetAllFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FaqCategoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FaqCategoryEntity>>>(new GetAllFaqCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._faqCategoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => FaqCategoryResponse, { nullable: true })
  async getOneFaqCategory(
    @Args('input', { nullable: true }) input: GetOneFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FaqCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FaqCategoryEntity>>(new GetOneFaqCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._faqCategoryMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFaqCategoryResponse, { nullable: true })
  async getPaginatedFaqCategory(
    @Args('input', { nullable: true }) input: GetPaginatedFaqCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFaqCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FaqCategoryEntity>>>(new GetPaginatedFaqCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._faqCategoryMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [FaqCategoryResponse])
  async getAllFaqCategoryOwn(
    @Args('input', { nullable: true }) input: GetAllFaqCategoryInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FaqCategoryResponse>> {
    return this.getAllFaqCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FAQ_CATEGORY'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedFaqCategoryResponse, { nullable: true })
  async getPaginatedFaqCategoryOwn(
    @Args('input', { nullable: true }) input: GetPaginatedFaqCategoryInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedFaqCategoryResponse> {
    return this.getPaginatedFaqCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: FaqCategoryResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: FaqCategoryResponse): Promise<SolvedEntityResponse> {
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

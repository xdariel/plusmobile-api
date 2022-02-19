import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateTaxesInput } from '../dto/inputs/create-taxes.input';
import { TaxesResponse } from '../dto/responses/taxes.response';
import { GetAllTaxesInput } from '../dto/inputs/get-all-taxes.input';
import { DeleteTaxesInput } from '../dto/inputs/delete-taxes.input';
import { CreateTaxesCommand } from '../../cqrs/commands/impl/create-taxes.command';
import { DeleteTaxesCommand } from '../../cqrs/commands/impl/delete-taxes.command';
import { GetAllTaxesQuery } from '../../cqrs/queries/impl/get-all-taxes.query';
import { TaxesMapper } from '../../mapper/taxes.mapper';
import { UpdateTaxesInput } from '../dto/inputs/update-taxes.input';
import { UpdateTaxesCommand } from '../../cqrs/commands/impl/update-taxes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedTaxesInput } from '../dto/inputs/get-paginated-taxes.input';
import { PaginatedTaxesResponse } from '../dto/responses/paginated-taxes.response';
import { GetPaginatedTaxesQuery } from '../../cqrs/queries/impl/get-paginated-taxes.query';
import { GetOneTaxesInput } from '../dto/inputs/get-one-taxes.input';
import { GetOneTaxesQuery } from '../../cqrs/queries/impl/get-one-taxes.query';
import { DeleteManyTaxesInput } from '../dto/inputs/delete-many-taxes.input';
import { DeleteManyTaxesCommand } from '../../cqrs/commands/impl/delete-many-taxes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { TaxesEntity } from '../../entities/taxes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => TaxesResponse)
export class TaxesResolver extends BaseResolver {
  constructor(
    private readonly _taxesMapper: TaxesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createTaxes(
    @Args('input') input: CreateTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateTaxesCommand(
      this._taxesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateTaxes(
    @Args('input') { update, entityId }: UpdateTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateTaxesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteTaxes(
    @Args('input') { entityId }: DeleteTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteTaxesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyTaxes(
    @Args('input') input: DeleteManyTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyTaxesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[TaxesResponse])
  async getAllTaxes(
    @Args('input', { nullable: true }) input: GetAllTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<TaxesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<TaxesEntity>>>(new GetAllTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._taxesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => TaxesResponse, { nullable: true })
  async getOneTaxes(
    @Args('input', { nullable: true }) input: GetOneTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<TaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<TaxesEntity>>(new GetOneTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._taxesMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TAXES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedTaxesResponse, { nullable: true })
  async getPaginatedTaxes(
    @Args('input', { nullable: true }) input: GetPaginatedTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<TaxesEntity>>>(new GetPaginatedTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._taxesMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TAXES'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [TaxesResponse])
  async getAllTaxesOwn(
    @Args('input', { nullable: true }) input: GetAllTaxesInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<TaxesResponse>> {
    return this.getAllTaxes({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TAXES'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedTaxesResponse, { nullable: true })
  async getPaginatedTaxesOwn(
    @Args('input', { nullable: true }) input: GetPaginatedTaxesInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedTaxesResponse> {
    return this.getPaginatedTaxes({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: TaxesResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: TaxesResponse): Promise<SolvedEntityResponse> {
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

import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateBanksInput } from '../dto/inputs/create-banks.input';
import { BanksResponse } from '../dto/responses/banks.response';
import { GetAllBanksInput } from '../dto/inputs/get-all-banks.input';
import { DeleteBanksInput } from '../dto/inputs/delete-banks.input';
import { CreateBanksCommand } from '../../cqrs/commands/impl/create-banks.command';
import { DeleteBanksCommand } from '../../cqrs/commands/impl/delete-banks.command';
import { GetAllBanksQuery } from '../../cqrs/queries/impl/get-all-banks.query';
import { BanksMapper } from '../../mapper/banks.mapper';
import { UpdateBanksInput } from '../dto/inputs/update-banks.input';
import { UpdateBanksCommand } from '../../cqrs/commands/impl/update-banks.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedBanksInput } from '../dto/inputs/get-paginated-banks.input';
import { PaginatedBanksResponse } from '../dto/responses/paginated-banks.response';
import { GetPaginatedBanksQuery } from '../../cqrs/queries/impl/get-paginated-banks.query';
import { GetOneBanksInput } from '../dto/inputs/get-one-banks.input';
import { GetOneBanksQuery } from '../../cqrs/queries/impl/get-one-banks.query';
import { DeleteManyBanksInput } from '../dto/inputs/delete-many-banks.input';
import { DeleteManyBanksCommand } from '../../cqrs/commands/impl/delete-many-banks.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { BanksEntity } from '../../entities/banks.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => BanksResponse)
export class BanksResolver extends BaseResolver {
  constructor(
    private readonly _banksMapper: BanksMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createBanks(
    @Args('input') input: CreateBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateBanksCommand(
      this._banksMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateBanks(
    @Args('input') { update, entityId }: UpdateBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateBanksCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteBanks(
    @Args('input') { entityId }: DeleteBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteBanksCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyBanks(
    @Args('input') input: DeleteManyBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyBanksCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[BanksResponse])
  async getAllBanks(
    @Args('input', { nullable: true }) input: GetAllBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<BanksResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<BanksEntity>>>(new GetAllBanksQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._banksMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => BanksResponse, { nullable: true })
  async getOneBanks(
    @Args('input', { nullable: true }) input: GetOneBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<BanksResponse> {
    const resp = await this._cqrsBus.execQuery<Result<BanksEntity>>(new GetOneBanksQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._banksMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BANKS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedBanksResponse, { nullable: true })
  async getPaginatedBanks(
    @Args('input', { nullable: true }) input: GetPaginatedBanksInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedBanksResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<BanksEntity>>>(new GetPaginatedBanksQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._banksMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['BANKS'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [BanksResponse])
  async getAllBanksOwn(
    @Args('input', { nullable: true }) input: GetAllBanksInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<BanksResponse>> {
    return this.getAllBanks({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['BANKS'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedBanksResponse, { nullable: true })
  async getPaginatedBanksOwn(
    @Args('input', { nullable: true }) input: GetPaginatedBanksInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedBanksResponse> {
    return this.getPaginatedBanks({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: BanksResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: BanksResponse): Promise<SolvedEntityResponse> {
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

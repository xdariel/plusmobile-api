import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateStoreInput } from '../dto/inputs/create-store.input';
import { StoreResponse } from '../dto/responses/store.response';
import { GetAllStoreInput } from '../dto/inputs/get-all-store.input';
import { DeleteStoreInput } from '../dto/inputs/delete-store.input';
import { CreateStoreCommand } from '../../cqrs/commands/impl/create-store.command';
import { DeleteStoreCommand } from '../../cqrs/commands/impl/delete-store.command';
import { GetAllStoreQuery } from '../../cqrs/queries/impl/get-all-store.query';
import { StoreMapper } from '../../mapper/store.mapper';
import { UpdateStoreInput } from '../dto/inputs/update-store.input';
import { UpdateStoreCommand } from '../../cqrs/commands/impl/update-store.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedStoreInput } from '../dto/inputs/get-paginated-store.input';
import { PaginatedStoreResponse } from '../dto/responses/paginated-store.response';
import { GetPaginatedStoreQuery } from '../../cqrs/queries/impl/get-paginated-store.query';
import { GetOneStoreInput } from '../dto/inputs/get-one-store.input';
import { GetOneStoreQuery } from '../../cqrs/queries/impl/get-one-store.query';
import { DeleteManyStoreInput } from '../dto/inputs/delete-many-store.input';
import { DeleteManyStoreCommand } from '../../cqrs/commands/impl/delete-many-store.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { StoreEntity } from '../../entities/store.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { VendorsEntity } from 'src/modules/vendors/entities/vendors.entity';
import { GetOneVendorsQuery } from 'src/modules/vendors/cqrs/queries/impl/get-one-vendors.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => StoreResponse)
export class StoreResolver extends BaseResolver {
  constructor(
    private readonly _storeMapper: StoreMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createStore(
    @Args('input') input: CreateStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateStoreCommand(
      this._storeMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateStore(
    @Args('input') { update, entityId }: UpdateStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateStoreCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteStore(
    @Args('input') { entityId }: DeleteStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteStoreCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyStore(
    @Args('input') input: DeleteManyStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyStoreCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[StoreResponse])
  async getAllStore(
    @Args('input', { nullable: true }) input: GetAllStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<StoreResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<StoreEntity>>>(new GetAllStoreQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._storeMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => StoreResponse, { nullable: true })
  async getOneStore(
    @Args('input', { nullable: true }) input: GetOneStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<StoreResponse> {
    const resp = await this._cqrsBus.execQuery<Result<StoreEntity>>(new GetOneStoreQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._storeMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['STORE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedStoreResponse, { nullable: true })
  async getPaginatedStore(
    @Args('input', { nullable: true }) input: GetPaginatedStoreInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedStoreResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<StoreEntity>>>(new GetPaginatedStoreQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._storeMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['STORE'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [StoreResponse])
  async getAllStoreOwn(
    @Args('input', { nullable: true }) input: GetAllStoreInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<StoreResponse>> {
    return this.getAllStore({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['STORE'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedStoreResponse, { nullable: true })
  async getPaginatedStoreOwn(
    @Args('input', { nullable: true }) input: GetPaginatedStoreInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedStoreResponse> {
    return this.getPaginatedStore({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: StoreResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: StoreResponse): Promise<SolvedEntityResponse> {
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


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async vendors(@Parent() parent?: StoreResponse): Promise<SolvedEntityResponse> {
    if (parent?.vendors) {
      const vendorsOrErr = await this._cqrsBus.execQuery<Result<VendorsEntity>>(new GetOneVendorsQuery({where:{
             id: {eq: parent.vendors.id}
        }}));
        if (vendorsOrErr.isFailure) {
          return null;
        }
        const vendors = vendorsOrErr.unwrap();

        return {
          id: vendors.id,
          entityName: VendorsEntity.name,
          identifier: vendors.nameCompany,
          fields: [
            {
              field: 'country',
              value: vendors.country
            }
          ]
        }
    }
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async logo(@Parent() parent?: StoreResponse): Promise<CloudFileResponse> {
    if (parent?.logo) {
      const logoOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.logo.id },
        },
      }));
      if (logoOrErr.isFailure) {
        return null;
      }
      const file = logoOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



}

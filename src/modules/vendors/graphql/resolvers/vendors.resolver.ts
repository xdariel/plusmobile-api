import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateVendorsInput } from '../dto/inputs/create-vendors.input';
import { VendorsResponse } from '../dto/responses/vendors.response';
import { GetAllVendorsInput } from '../dto/inputs/get-all-vendors.input';
import { DeleteVendorsInput } from '../dto/inputs/delete-vendors.input';
import { CreateVendorsCommand } from '../../cqrs/commands/impl/create-vendors.command';
import { DeleteVendorsCommand } from '../../cqrs/commands/impl/delete-vendors.command';
import { GetAllVendorsQuery } from '../../cqrs/queries/impl/get-all-vendors.query';
import { VendorsMapper } from '../../mapper/vendors.mapper';
import { UpdateVendorsInput } from '../dto/inputs/update-vendors.input';
import { UpdateVendorsCommand } from '../../cqrs/commands/impl/update-vendors.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedVendorsInput } from '../dto/inputs/get-paginated-vendors.input';
import { PaginatedVendorsResponse } from '../dto/responses/paginated-vendors.response';
import { GetPaginatedVendorsQuery } from '../../cqrs/queries/impl/get-paginated-vendors.query';
import { GetOneVendorsInput } from '../dto/inputs/get-one-vendors.input';
import { GetOneVendorsQuery } from '../../cqrs/queries/impl/get-one-vendors.query';
import { DeleteManyVendorsInput } from '../dto/inputs/delete-many-vendors.input';
import { DeleteManyVendorsCommand } from '../../cqrs/commands/impl/delete-many-vendors.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { VendorsEntity } from '../../entities/vendors.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { BanksEntity } from 'src/modules/banks/entities/banks.entity';
import { GetOneBanksQuery } from 'src/modules/banks/cqrs/queries/impl/get-one-banks.query';


@Resolver(() => VendorsResponse)
export class VendorsResolver extends BaseResolver {
  constructor(
    private readonly _vendorsMapper: VendorsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createVendors(
    @Args('input') input: CreateVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateVendorsCommand(
      this._vendorsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateVendors(
    @Args('input') { update, entityId }: UpdateVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateVendorsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteVendors(
    @Args('input') { entityId }: DeleteVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteVendorsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyVendors(
    @Args('input') input: DeleteManyVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyVendorsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[VendorsResponse])
  async getAllVendors(
    @Args('input', { nullable: true }) input: GetAllVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<VendorsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<VendorsEntity>>>(new GetAllVendorsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._vendorsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => VendorsResponse, { nullable: true })
  async getOneVendors(
    @Args('input', { nullable: true }) input: GetOneVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<VendorsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<VendorsEntity>>(new GetOneVendorsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._vendorsMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['VENDORS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedVendorsResponse, { nullable: true })
  async getPaginatedVendors(
    @Args('input', { nullable: true }) input: GetPaginatedVendorsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedVendorsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<VendorsEntity>>>(new GetPaginatedVendorsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._vendorsMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['VENDORS'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [VendorsResponse])
  async getAllVendorsOwn(
    @Args('input', { nullable: true }) input: GetAllVendorsInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<VendorsResponse>> {
    return this.getAllVendors({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['VENDORS'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedVendorsResponse, { nullable: true })
  async getPaginatedVendorsOwn(
    @Args('input', { nullable: true }) input: GetPaginatedVendorsInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedVendorsResponse> {
    return this.getPaginatedVendors({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: VendorsResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: VendorsResponse): Promise<SolvedEntityResponse> {
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
  async user(@Parent() parent?: VendorsResponse): Promise<SolvedEntityResponse> {
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
  async bank(@Parent() parent?: VendorsResponse): Promise<SolvedEntityResponse> {
    if (parent?.bank) {
      const bankOrErr = await this._cqrsBus.execQuery<Result<BanksEntity>>(new GetOneBanksQuery({
        where: {
          id: { eq: parent.bank.id },
        },
      }));
      if (bankOrErr.isFailure) {
        return null;
      }
      const bank = bankOrErr.unwrap();
      return {
        id: bank.id,
        entityName: BanksEntity.name,
        identifier: `${bank.name}`,
        fields: [

        ],
      };
    }
  }


}

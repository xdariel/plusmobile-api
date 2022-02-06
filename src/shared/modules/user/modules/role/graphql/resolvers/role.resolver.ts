import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateRoleInput } from '../dto/inputs/create-role.input';
import { RoleResponse } from '../dto/responses/role.response';
import { GetAllRoleInput } from '../dto/inputs/get-all-role.input';
import { DeleteRoleInput } from '../dto/inputs/delete-role.input';
import { CreateRoleCommand } from '../../cqrs/commands/impl/create-role.command';
import { DeleteRoleCommand } from '../../cqrs/commands/impl/delete-role.command';
import { GetAllRoleQuery } from '../../cqrs/queries/impl/get-all-role.query';
import { RoleMapper } from '../../mapper/role.mapper';
import { UpdateRoleInput } from '../dto/inputs/update-role.input';
import { UpdateRoleCommand } from '../../cqrs/commands/impl/update-role.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedRoleInput } from '../dto/inputs/get-paginated-role.input';
import { PaginatedRoleResponse } from '../dto/responses/paginated-role.response';
import { GetPaginatedRoleQuery } from '../../cqrs/queries/impl/get-paginated-role.query';
import { GetOneRoleInput } from '../dto/inputs/get-one-role.input';
import { GetOneRoleQuery } from '../../cqrs/queries/impl/get-one-role.query';
import { DeleteManyRoleInput } from '../dto/inputs/delete-many-role.input';
import { DeleteManyRoleCommand } from '../../cqrs/commands/impl/delete-many-role.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { RoleEntity } from '../../entities/role.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { AvailablePermitsResponse } from '../dto/responses/available-permits.response';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => RoleResponse)
export class RoleResolver extends BaseResolver {
  constructor(
    private readonly _roleMapper: RoleMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createRole(
    @Args('input') input: CreateRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateRoleCommand(
      this._roleMapper.dtoInput2Persistent(input),
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateRole(
    @Args('input') { update, entityId }: UpdateRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateRoleCommand(entityId, update));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.DELETE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteRole(
    @Args('input') { entityId }: DeleteRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteRoleCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.DELETE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyRole(
    @Args('input') input: DeleteManyRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyRoleCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.GET_ALL })
  @Query(() => [RoleResponse])
  async getAllRole(
    @Args('input', { nullable: true }) input: GetAllRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<RoleResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<RoleEntity>>>(new GetAllRoleQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._roleMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => RoleResponse, { nullable: true })
  async getOneRole(
    @Args('input', { nullable: true }) input: GetOneRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<RoleResponse> {
    const resp = await this._cqrsBus.execQuery<Result<RoleEntity>>(new GetOneRoleQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._roleMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedRoleResponse, { nullable: true })
  async getPaginatedRole(
    @Args('input', { nullable: true }) input: GetPaginatedRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedRoleResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<RoleEntity>>>(new GetPaginatedRoleQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._roleMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [AvailablePermitsResponse])
  async getAvailablePermits(
    @Args('input', { nullable: true }) input: GetAllRoleInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AvailablePermitsResponse>> {

    const keys = Object.keys(APP_MODULES).map(k => k as keyof APP_MODULES);

    const result = new Array<AvailablePermitsResponse>();

    for (const k of keys) {
      result.push({
        module: APP_MODULES[k],
        actions: this.getPermitsByModule(APP_MODULES[k]),
      });
    }

    return result;
  }


  private getPermitsByModule(module: APP_MODULES): Array<ACTION_LIST> {
    let permits: Array<ACTION_LIST> = [
      ACTION_LIST.GET_ALL,
      ACTION_LIST.GET_ALL_OWN,
      ACTION_LIST.GET_PAGINATED,
      ACTION_LIST.GET_PAGINATED_OWN,
      ACTION_LIST.DELETE,
      ACTION_LIST.UPDATE,
      ACTION_LIST.CREATE,
    ];

    permits = permits.concat(
      Object.keys(ACTION_LIST).filter(x => x.includes(String(module))) as Array<ACTION_LIST>,
    );
    return permits;

  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [RoleResponse])
  async getAllRoleOwn(
    @Args('input', { nullable: true }) input: GetAllRoleInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<RoleResponse>> {
    return this.getAllRole({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_ROLES'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedRoleResponse, { nullable: true })
  async getPaginatedRoleOwn(
    @Args('input', { nullable: true }) input: GetPaginatedRoleInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedRoleResponse> {
    return this.getPaginatedRole({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: RoleResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: RoleResponse): Promise<SolvedEntityResponse> {
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

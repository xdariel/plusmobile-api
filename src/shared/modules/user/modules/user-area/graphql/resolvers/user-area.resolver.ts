import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateUserAreaInput } from '../dto/inputs/create-user-area.input';
import { UserAreaResponse } from '../dto/responses/user-area.response';
import { GetAllUserAreaInput } from '../dto/inputs/get-all-user-area.input';
import { DeleteUserAreaInput } from '../dto/inputs/delete-user-area.input';
import { CreateUserAreaCommand } from '../../cqrs/commands/impl/create-user-area.command';
import { DeleteUserAreaCommand } from '../../cqrs/commands/impl/delete-user-area.command';
import { GetAllUserAreaQuery } from '../../cqrs/queries/impl/get-all-user-area.query';
import { UserAreaMapper } from '../../mapper/user-area.mapper';
import { UpdateUserAreaInput } from '../dto/inputs/update-user-area.input';
import { UpdateUserAreaCommand } from '../../cqrs/commands/impl/update-user-area.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedUserAreaInput } from '../dto/inputs/get-paginated-user-area.input';
import { PaginatedUserAreaResponse } from '../dto/responses/paginated-user-area.response';
import { GetPaginatedUserAreaQuery } from '../../cqrs/queries/impl/get-paginated-user-area.query';
import { GetOneUserAreaInput } from '../dto/inputs/get-one-user-area.input';
import { GetOneUserAreaQuery } from '../../cqrs/queries/impl/get-one-user-area.query';
import { DeleteManyUserAreaInput } from '../dto/inputs/delete-many-user-area.input';
import { DeleteManyUserAreaCommand } from '../../cqrs/commands/impl/delete-many-user-area.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { UserAreaEntity } from '../../entities/user-area.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src//shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => UserAreaResponse)
export class UserAreaResolver extends BaseResolver {
  constructor(
    private readonly _userAreaMapper: UserAreaMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createUserArea(
    @Args('input') input: CreateUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateUserAreaCommand(
      this._userAreaMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateUserArea(
    @Args('input') { update, entityId }: UpdateUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateUserAreaCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteUserArea(
    @Args('input') { entityId }: DeleteUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteUserAreaCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyUserArea(
    @Args('input') input: DeleteManyUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyUserAreaCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  //@Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.GET_ALL})
  @Query(() => [UserAreaResponse], { nullable: true })
  async getAllUserArea(
    @Args('input', { nullable: true }) input: GetAllUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<UserAreaResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<UserAreaEntity>>>(new GetAllUserAreaQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._userAreaMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserAreaResponse, { nullable: true })
  async getOneUserArea(
    @Args('input', { nullable: true }) input: GetOneUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<UserAreaResponse> {
    const resp = await this._cqrsBus.execQuery<Result<UserAreaEntity>>(new GetOneUserAreaQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._userAreaMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['USER_AREA'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedUserAreaResponse, { nullable: true })
  async getPaginatedUserArea(
    @Args('input', { nullable: true }) input: GetPaginatedUserAreaInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedUserAreaResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<UserAreaEntity>>>(new GetPaginatedUserAreaQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._userAreaMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_AREA'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [UserAreaResponse])
  async getAllUserAreaOwn(
    @Args('input', { nullable: true }) input: GetAllUserAreaInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<UserAreaResponse>> {
    return this.getAllUserArea({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['USER_AREA'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedUserAreaResponse, { nullable: true })
  async getPaginatedUserAreaOwn(
    @Args('input', { nullable: true }) input: GetPaginatedUserAreaInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedUserAreaResponse> {
    return this.getPaginatedUserArea({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: UserAreaResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: UserAreaResponse): Promise<SolvedEntityResponse> {
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

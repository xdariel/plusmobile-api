import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateCategoryInput } from '../dto/inputs/create-category.input';
import { CategoryResponse } from '../dto/responses/category.response';
import { GetAllCategoryInput } from '../dto/inputs/get-all-category.input';
import { DeleteCategoryInput } from '../dto/inputs/delete-category.input';
import { CreateCategoryCommand } from '../../cqrs/commands/impl/create-category.command';
import { DeleteCategoryCommand } from '../../cqrs/commands/impl/delete-category.command';
import { GetAllCategoryQuery } from '../../cqrs/queries/impl/get-all-category.query';
import { CategoryMapper } from '../../mapper/category.mapper';
import { UpdateCategoryInput } from '../dto/inputs/update-category.input';
import { UpdateCategoryCommand } from '../../cqrs/commands/impl/update-category.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedCategoryInput } from '../dto/inputs/get-paginated-category.input';
import { PaginatedCategoryResponse } from '../dto/responses/paginated-category.response';
import { GetPaginatedCategoryQuery } from '../../cqrs/queries/impl/get-paginated-category.query';
import { GetOneCategoryInput } from '../dto/inputs/get-one-category.input';
import { GetOneCategoryQuery } from '../../cqrs/queries/impl/get-one-category.query';
import { DeleteManyCategoryInput } from '../dto/inputs/delete-many-category.input';
import { DeleteManyCategoryCommand } from '../../cqrs/commands/impl/delete-many-category.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { CategoryEntity } from '../../entities/category.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => CategoryResponse)
export class CategoryResolver extends BaseResolver {
  constructor(
    private readonly _categoryMapper: CategoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createCategory(
    @Args('input') input: CreateCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateCategoryCommand(
      this._categoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateCategory(
    @Args('input') { update, entityId }: UpdateCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateCategoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteCategory(
    @Args('input') { entityId }: DeleteCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteCategoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyCategory(
    @Args('input') input: DeleteManyCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyCategoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[CategoryResponse])
  async getAllCategory(
    @Args('input', { nullable: true }) input: GetAllCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<CategoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<CategoryEntity>>>(new GetAllCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._categoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => CategoryResponse, { nullable: true })
  async getOneCategory(
    @Args('input', { nullable: true }) input: GetOneCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<CategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<CategoryEntity>>(new GetOneCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._categoryMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CATEGORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedCategoryResponse, { nullable: true })
  async getPaginatedCategory(
    @Args('input', { nullable: true }) input: GetPaginatedCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<CategoryEntity>>>(new GetPaginatedCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._categoryMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['CATEGORY'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [CategoryResponse])
  async getAllCategoryOwn(
    @Args('input', { nullable: true }) input: GetAllCategoryInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<CategoryResponse>> {
    return this.getAllCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['CATEGORY'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedCategoryResponse, { nullable: true })
  async getPaginatedCategoryOwn(
    @Args('input', { nullable: true }) input: GetPaginatedCategoryInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedCategoryResponse> {
    return this.getPaginatedCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: CategoryResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: CategoryResponse): Promise<SolvedEntityResponse> {
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

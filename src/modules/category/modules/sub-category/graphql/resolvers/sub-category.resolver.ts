import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateSubCategoryInput } from '../dto/inputs/create-sub-category.input';
import { SubCategoryResponse } from '../dto/responses/sub-category.response';
import { GetAllSubCategoryInput } from '../dto/inputs/get-all-sub-category.input';
import { DeleteSubCategoryInput } from '../dto/inputs/delete-sub-category.input';
import { CreateSubCategoryCommand } from '../../cqrs/commands/impl/create-sub-category.command';
import { DeleteSubCategoryCommand } from '../../cqrs/commands/impl/delete-sub-category.command';
import { GetAllSubCategoryQuery } from '../../cqrs/queries/impl/get-all-sub-category.query';
import { SubCategoryMapper } from '../../mapper/sub-category.mapper';
import { UpdateSubCategoryInput } from '../dto/inputs/update-sub-category.input';
import { UpdateSubCategoryCommand } from '../../cqrs/commands/impl/update-sub-category.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedSubCategoryInput } from '../dto/inputs/get-paginated-sub-category.input';
import { PaginatedSubCategoryResponse } from '../dto/responses/paginated-sub-category.response';
import { GetPaginatedSubCategoryQuery } from '../../cqrs/queries/impl/get-paginated-sub-category.query';
import { GetOneSubCategoryInput } from '../dto/inputs/get-one-sub-category.input';
import { GetOneSubCategoryQuery } from '../../cqrs/queries/impl/get-one-sub-category.query';
import { DeleteManySubCategoryInput } from '../dto/inputs/delete-many-sub-category.input';
import { DeleteManySubCategoryCommand } from '../../cqrs/commands/impl/delete-many-sub-category.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { SubCategoryEntity } from '../../entities/sub-category.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { GetOneCategoryQuery } from 'src/modules/category/cqrs/queries/impl/get-one-category.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => SubCategoryResponse)
export class SubCategoryResolver extends BaseResolver {
  constructor(
    private readonly _subCategoryMapper: SubCategoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createSubCategory(
    @Args('input') input: CreateSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateSubCategoryCommand(
      this._subCategoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateSubCategory(
    @Args('input') { update, entityId }: UpdateSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateSubCategoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteSubCategory(
    @Args('input') { entityId }: DeleteSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteSubCategoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManySubCategory(
    @Args('input') input: DeleteManySubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManySubCategoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[SubCategoryResponse])
  async getAllSubCategory(
    @Args('input', { nullable: true }) input: GetAllSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SubCategoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<SubCategoryEntity>>>(new GetAllSubCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._subCategoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => SubCategoryResponse, { nullable: true })
  async getOneSubCategory(
    @Args('input', { nullable: true }) input: GetOneSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<SubCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<SubCategoryEntity>>(new GetOneSubCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._subCategoryMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedSubCategoryResponse, { nullable: true })
  async getPaginatedSubCategory(
    @Args('input', { nullable: true }) input: GetPaginatedSubCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedSubCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<SubCategoryEntity>>>(new GetPaginatedSubCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._subCategoryMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [SubCategoryResponse])
  async getAllSubCategoryOwn(
    @Args('input', { nullable: true }) input: GetAllSubCategoryInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SubCategoryResponse>> {
    return this.getAllSubCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['SUB_CATEGORY'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedSubCategoryResponse, { nullable: true })
  async getPaginatedSubCategoryOwn(
    @Args('input', { nullable: true }) input: GetPaginatedSubCategoryInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedSubCategoryResponse> {
    return this.getPaginatedSubCategory({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: SubCategoryResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: SubCategoryResponse): Promise<SolvedEntityResponse> {
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
  async category(@Parent() parent?: SubCategoryResponse): Promise<SolvedEntityResponse> {
    if (parent?.category) {
      const categoryOrErr = await this._cqrsBus.execQuery<Result<CategoryEntity>>(new GetOneCategoryQuery({
        where: {
          id: { eq: parent.category.id },
        },
      }));
      if (categoryOrErr.isFailure) {
        return null;
      }
      const category = categoryOrErr.unwrap();
      return {
        id: category.id,
        entityName: UserEntity.name,
        identifier: `${category.name}`,
        fields: [

        ],
      };
    }
  }

  

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async banner(@Parent() parent?: SubCategoryResponse): Promise<CloudFileResponse> {
    if (parent?.banner) {
      const logoOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.banner.id },
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

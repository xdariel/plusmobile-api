import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateBrandsInput } from '../dto/inputs/create-brands.input';
import { BrandsResponse } from '../dto/responses/brands.response';
import { GetAllBrandsInput } from '../dto/inputs/get-all-brands.input';
import { DeleteBrandsInput } from '../dto/inputs/delete-brands.input';
import { CreateBrandsCommand } from '../../cqrs/commands/impl/create-brands.command';
import { DeleteBrandsCommand } from '../../cqrs/commands/impl/delete-brands.command';
import { GetAllBrandsQuery } from '../../cqrs/queries/impl/get-all-brands.query';
import { BrandsMapper } from '../../mapper/brands.mapper';
import { UpdateBrandsInput } from '../dto/inputs/update-brands.input';
import { UpdateBrandsCommand } from '../../cqrs/commands/impl/update-brands.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedBrandsInput } from '../dto/inputs/get-paginated-brands.input';
import { PaginatedBrandsResponse } from '../dto/responses/paginated-brands.response';
import { GetPaginatedBrandsQuery } from '../../cqrs/queries/impl/get-paginated-brands.query';
import { GetOneBrandsInput } from '../dto/inputs/get-one-brands.input';
import { GetOneBrandsQuery } from '../../cqrs/queries/impl/get-one-brands.query';
import { DeleteManyBrandsInput } from '../dto/inputs/delete-many-brands.input';
import { DeleteManyBrandsCommand } from '../../cqrs/commands/impl/delete-many-brands.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { BrandsEntity } from '../../entities/brands.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => BrandsResponse)
export class BrandsResolver extends BaseResolver {
  constructor(
    private readonly _brandsMapper: BrandsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createBrands(
    @Args('input') input: CreateBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateBrandsCommand(
      this._brandsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateBrands(
    @Args('input') { update, entityId }: UpdateBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateBrandsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteBrands(
    @Args('input') { entityId }: DeleteBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteBrandsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyBrands(
    @Args('input') input: DeleteManyBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyBrandsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[BrandsResponse])
  async getAllBrands(
    @Args('input', { nullable: true }) input: GetAllBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<BrandsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<BrandsEntity>>>(new GetAllBrandsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._brandsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => BrandsResponse, { nullable: true })
  async getOneBrands(
    @Args('input', { nullable: true }) input: GetOneBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<BrandsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<BrandsEntity>>(new GetOneBrandsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._brandsMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['BRANDS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedBrandsResponse, { nullable: true })
  async getPaginatedBrands(
    @Args('input', { nullable: true }) input: GetPaginatedBrandsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedBrandsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<BrandsEntity>>>(new GetPaginatedBrandsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._brandsMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['BRANDS'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [BrandsResponse])
  async getAllBrandsOwn(
    @Args('input', { nullable: true }) input: GetAllBrandsInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<BrandsResponse>> {
    return this.getAllBrands({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['BRANDS'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedBrandsResponse, { nullable: true })
  async getPaginatedBrandsOwn(
    @Args('input', { nullable: true }) input: GetPaginatedBrandsInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedBrandsResponse> {
    return this.getPaginatedBrands({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: BrandsResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: BrandsResponse): Promise<SolvedEntityResponse> {
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

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async banner(@Parent() parent?: BrandsResponse): Promise<CloudFileResponse> {
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

import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateProductsInput } from '../dto/inputs/create-products.input';
import { ProductsResponse } from '../dto/responses/products.response';
import { GetAllProductsInput } from '../dto/inputs/get-all-products.input';
import { DeleteProductsInput } from '../dto/inputs/delete-products.input';
import { CreateProductsCommand } from '../../cqrs/commands/impl/create-products.command';
import { DeleteProductsCommand } from '../../cqrs/commands/impl/delete-products.command';
import { GetAllProductsQuery } from '../../cqrs/queries/impl/get-all-products.query';
import { ProductsMapper } from '../../mapper/products.mapper';
import { UpdateProductsInput } from '../dto/inputs/update-products.input';
import { UpdateProductsCommand } from '../../cqrs/commands/impl/update-products.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedProductsInput } from '../dto/inputs/get-paginated-products.input';
import { PaginatedProductsResponse } from '../dto/responses/paginated-products.response';
import { GetPaginatedProductsQuery } from '../../cqrs/queries/impl/get-paginated-products.query';
import { GetOneProductsInput } from '../dto/inputs/get-one-products.input';
import { GetOneProductsQuery } from '../../cqrs/queries/impl/get-one-products.query';
import { DeleteManyProductsInput } from '../dto/inputs/delete-many-products.input';
import { DeleteManyProductsCommand } from '../../cqrs/commands/impl/delete-many-products.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ProductsEntity } from '../../entities/products.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { StoreEntity } from 'src/modules/store/entities/store.entity';
import { GetOneStoreQuery } from 'src/modules/store/cqrs/queries/impl/get-one-store.query';
import { TaxesEntity } from 'src/modules/taxes/entities/taxes.entity';
import { GetOneTaxesQuery } from 'src/modules/taxes/cqrs/queries/impl/get-one-taxes.query';
import { SubCategoryEntity } from 'src/modules/category/modules/sub-category/entities/sub-category.entity';
import { GetOneSubCategoryQuery } from 'src/modules/category/modules/sub-category/cqrs/queries/impl/get-one-sub-category.query';
import { BrandsEntity } from 'src/modules/brands/entities/brands.entity';
import { GetOneBrandsQuery } from 'src/modules/brands/cqrs/queries/impl/get-one-brands.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => ProductsResponse)
export class ProductsResolver extends BaseResolver {
  constructor(
    private readonly _productsMapper: ProductsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createProducts(
    @Args('input') input: CreateProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateProductsCommand(
      this._productsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateProducts(
    @Args('input') { update, entityId }: UpdateProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateProductsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteProducts(
    @Args('input') { entityId }: DeleteProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteProductsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyProducts(
    @Args('input') input: DeleteManyProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyProductsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ProductsResponse])
  async getAllProducts(
    @Args('input', { nullable: true }) input: GetAllProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ProductsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ProductsEntity>>>(new GetAllProductsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._productsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => ProductsResponse, { nullable: true })
  async getOneProducts(
    @Args('input', { nullable: true }) input: GetOneProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ProductsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ProductsEntity>>(new GetOneProductsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._productsMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCTS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedProductsResponse, { nullable: true })
  async getPaginatedProducts(
    @Args('input', { nullable: true }) input: GetPaginatedProductsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedProductsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ProductsEntity>>>(new GetPaginatedProductsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._productsMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['PRODUCTS'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [ProductsResponse])
  async getAllProductsOwn(
    @Args('input', { nullable: true }) input: GetAllProductsInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ProductsResponse>> {
    return this.getAllProducts({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['PRODUCTS'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedProductsResponse, { nullable: true })
  async getPaginatedProductsOwn(
    @Args('input', { nullable: true }) input: GetPaginatedProductsInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedProductsResponse> {
    return this.getPaginatedProducts({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
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
  async relatedProducts(@Parent() parent?: ProductsResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.relatedProducts) {
      const relatedProductsOrErr = await this._cqrsBus.execQuery<Result<Array<ProductsEntity>>>(new GetAllProductsQuery({where:{
          id: {in: parent.relatedProducts.map(x=>x.id)}
        }}));
      if (relatedProductsOrErr.isFailure) {
        return [];
      }
      const relatedProducts: Array<ProductsEntity> = relatedProductsOrErr.unwrap();
      return relatedProducts.map((x)=>{
        return {
          id: x.id,
          entityName: ProductsEntity.name,
          identifier: `${x.name}`,
          fields: [
            {
              field: 'price',
              value: x?.price.toString(),
            },
          ],
        }
      })
    }
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async photo(@Parent() parent?: ProductsResponse): Promise<CloudFileResponse> {
    if (parent?.photo) {
      const photoOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.photo.id },
        },
      }));
      if (photoOrErr.isFailure) {
        return null;
      }
      const file = photoOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async brand(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
    if (parent?.brand) {
      const brandsOrErr = await this._cqrsBus.execQuery<Result<BrandsEntity>>(new GetOneBrandsQuery({where:{
             id: {eq: parent.brand.id}
        }}));
        if (brandsOrErr.isFailure) {
          return null;
        }
        const brand = brandsOrErr.unwrap();

        return {
          id: brand.id,
          entityName: BrandsEntity.name,
          identifier: brand.name,

        }
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async subCategory(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
    if (parent?.subCategory) {
      const subCategoryOrErr = await this._cqrsBus.execQuery<Result<SubCategoryEntity>>(new GetOneSubCategoryQuery({where:{
             id: {eq: parent.subCategory.id}
        }}));
        if (subCategoryOrErr.isFailure) {
          return null;
        }
        const subCategory = subCategoryOrErr.unwrap();

        return {
          id: subCategory.id,
          entityName: SubCategoryEntity.name,
          identifier: subCategory.name,

        }
    }
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async store(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
    if (parent?.store) {
      const storeOrErr = await this._cqrsBus.execQuery<Result<StoreEntity>>(new GetOneStoreQuery({where:{
             id: {eq: parent.store.id}
        }}));
        if (storeOrErr.isFailure) {
          return null;
        }
        const store = storeOrErr.unwrap();

        return {
          id: store.id,
          entityName: StoreEntity.name,
          identifier: store.name,

        }
    }
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async tax(@Parent() parent?: ProductsResponse): Promise<SolvedEntityResponse> {
    if (parent?.tax) {
      const taxOrErr = await this._cqrsBus.execQuery<Result<TaxesEntity>>(new GetOneTaxesQuery({where:{
             id: {eq: parent.tax.id}
        }}));
        if (taxOrErr.isFailure) {
          return null;
        }
        const tax = taxOrErr.unwrap();

        return {
          id: tax.id,
          entityName: TaxesEntity.name,
          identifier: tax.name,

        }
    }
  }


}

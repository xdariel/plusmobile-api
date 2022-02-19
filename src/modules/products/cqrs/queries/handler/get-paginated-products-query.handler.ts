import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedProductsQuery } from '../impl/get-paginated-products.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@QueryHandler(GetPaginatedProductsQuery)
export class GetPaginatedProductsQueryHandler extends GetPaginatedQueryHandler<ProductsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductsEntityService.name)
  }

}

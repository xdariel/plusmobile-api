import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllProductsQuery } from '../impl/get-all-products.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@QueryHandler(GetAllProductsQuery)
export class GetAllProductsQueryHandler extends GetAllQueryHandler<ProductsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductsEntityService.name)
  }

}

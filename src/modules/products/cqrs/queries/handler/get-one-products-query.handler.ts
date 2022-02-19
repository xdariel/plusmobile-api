import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneProductsQuery } from '../impl/get-one-products.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@QueryHandler(GetOneProductsQuery)
export class GetOneProductsQueryHandler extends GetOneQueryHandler<ProductsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductsEntityService.name)
  }
}


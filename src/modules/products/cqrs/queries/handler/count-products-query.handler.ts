import { QueryHandler } from '@nestjs/cqrs';
import { CountProductsQuery } from '../impl/count-products.query';

import { ModuleRef } from '@nestjs/core';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountProductsQuery)
export class CountProductsQueryHandler extends CountQueryHandler<ProductsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ProductsEntityService.name)
  }

}

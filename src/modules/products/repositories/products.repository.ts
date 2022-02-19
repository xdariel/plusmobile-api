import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProductsEntity } from '../entities/products.entity';

@Injectable()
export class ProductsRepository extends BaseRepository<ProductsEntity, FilterableFieldsType<ProductsEntity>> {
  constructor(
    @Inject(ProductsEntity.name) private readonly _productsModel: Model<ProductsEntity>,
  ) {
    super(_productsModel, ProductsRepository.name);
  }
}

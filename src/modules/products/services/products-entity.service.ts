import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ProductsEntity } from '../entities/products.entity';
import { ProductsRepository } from '../repositories/products.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';


@Injectable()
export class ProductsEntityService extends BaseEntityService<ProductsEntity> {
  constructor(private readonly _productsRepo: ProductsRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_productsRepo, ProductsEntity.name, dbUser);
  }




}

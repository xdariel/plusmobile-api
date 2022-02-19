import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { BrandsEntity } from '../entities/brands.entity';

@Injectable()
export class BrandsRepository extends BaseRepository<BrandsEntity, FilterableFieldsType<BrandsEntity>> {
  constructor(
    @Inject(BrandsEntity.name) private readonly _brandsModel: Model<BrandsEntity>,
  ) {
    super(_brandsModel, BrandsRepository.name);
  }
}

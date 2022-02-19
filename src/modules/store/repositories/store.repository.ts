import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { StoreEntity } from '../entities/store.entity';

@Injectable()
export class StoreRepository extends BaseRepository<StoreEntity, FilterableFieldsType<StoreEntity>> {
  constructor(
    @Inject(StoreEntity.name) private readonly _storeModel: Model<StoreEntity>,
  ) {
    super(_storeModel, StoreRepository.name);
  }
}

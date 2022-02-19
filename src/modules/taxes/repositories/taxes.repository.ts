import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { TaxesEntity } from '../entities/taxes.entity';

@Injectable()
export class TaxesRepository extends BaseRepository<TaxesEntity, FilterableFieldsType<TaxesEntity>> {
  constructor(
    @Inject(TaxesEntity.name) private readonly _taxesModel: Model<TaxesEntity>,
  ) {
    super(_taxesModel, TaxesRepository.name);
  }
}

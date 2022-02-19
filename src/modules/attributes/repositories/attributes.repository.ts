import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AttributesEntity } from '../entities/attributes.entity';

@Injectable()
export class AttributesRepository extends BaseRepository<AttributesEntity, FilterableFieldsType<AttributesEntity>> {
  constructor(
    @Inject(AttributesEntity.name) private readonly _attributesModel: Model<AttributesEntity>,
  ) {
    super(_attributesModel, AttributesRepository.name);
  }
}

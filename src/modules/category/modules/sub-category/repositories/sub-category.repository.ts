import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubCategoryEntity } from '../entities/sub-category.entity';

@Injectable()
export class SubCategoryRepository extends BaseRepository<SubCategoryEntity, FilterableFieldsType<SubCategoryEntity>> {
  constructor(
    @Inject(SubCategoryEntity.name) private readonly _subCategoryModel: Model<SubCategoryEntity>,
  ) {
    super(_subCategoryModel, SubCategoryRepository.name);
  }
}

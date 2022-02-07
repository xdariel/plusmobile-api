import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity, FilterableFieldsType<CategoryEntity>> {
  constructor(
    @Inject(CategoryEntity.name) private readonly _categoryModel: Model<CategoryEntity>,
  ) {
    super(_categoryModel, CategoryRepository.name);
  }
}

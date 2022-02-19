import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { CategoryEntity } from '../entities/category.entity';
import { SubCategoryRepository } from '../modules/sub-category/repositories/sub-category.repository';

@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity, FilterableFieldsType<CategoryEntity>>implements Partial<IEntityHooks<CategoryEntity>> {
  constructor(
    private _subCategoryRepository:SubCategoryRepository,
    @Inject(CategoryEntity.name) private readonly _categoryModel: Model<CategoryEntity>,
  ) {
    super(_categoryModel, CategoryRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(category: CategoryEntity): Promise<void> {
    await this._subCategoryRepository.deleteMany({ category: { eq: category.id } });
  }
}

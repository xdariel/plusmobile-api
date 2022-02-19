import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FaqRepository } from 'src/modules/faq/repositories/faq.repository';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FaqCategoryEntity } from '../entities/faq-category.entity';

@Injectable()
export class FaqCategoryRepository extends BaseRepository<FaqCategoryEntity, FilterableFieldsType<FaqCategoryEntity>>implements Partial<IEntityHooks<FaqCategoryEntity>> {
  constructor(
    private _faqRepository:FaqRepository,
    @Inject(FaqCategoryEntity.name) private readonly _faqCategoryModel: Model<FaqCategoryEntity>,
  ) {
    super(_faqCategoryModel, FaqCategoryRepository.name,{
      afterDelete:(e)=>this.afterDelete(e)
    });
  }
  async afterDelete(category: FaqCategoryEntity): Promise<void> {
    await this._faqRepository.deleteMany({ category: { eq: category.id } });
  }
}

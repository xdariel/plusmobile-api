import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FaqEntity } from '../entities/faq.entity';

@Injectable()
export class FaqRepository extends BaseRepository<FaqEntity, FilterableFieldsType<FaqEntity>> {
  constructor(
    @Inject(FaqEntity.name) private readonly _faqModel: Model<FaqEntity>,
  ) {
    super(_faqModel, FaqRepository.name);
  }
}

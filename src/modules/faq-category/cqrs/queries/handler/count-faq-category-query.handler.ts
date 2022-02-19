import { QueryHandler } from '@nestjs/cqrs';
import { CountFaqCategoryQuery } from '../impl/count-faq-category.query';

import { ModuleRef } from '@nestjs/core';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountFaqCategoryQuery)
export class CountFaqCategoryQueryHandler extends CountQueryHandler<FaqCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqCategoryEntityService.name)
  }

}

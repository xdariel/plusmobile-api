import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFaqCategoryQuery } from '../impl/get-all-faq-category.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@QueryHandler(GetAllFaqCategoryQuery)
export class GetAllFaqCategoryQueryHandler extends GetAllQueryHandler<FaqCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqCategoryEntityService.name)
  }

}

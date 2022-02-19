import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFaqCategoryQuery } from '../impl/get-one-faq-category.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@QueryHandler(GetOneFaqCategoryQuery)
export class GetOneFaqCategoryQueryHandler extends GetOneQueryHandler<FaqCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqCategoryEntityService.name)
  }
}


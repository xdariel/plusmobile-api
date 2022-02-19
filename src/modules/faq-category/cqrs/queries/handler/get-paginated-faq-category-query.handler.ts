import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFaqCategoryQuery } from '../impl/get-paginated-faq-category.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@QueryHandler(GetPaginatedFaqCategoryQuery)
export class GetPaginatedFaqCategoryQueryHandler extends GetPaginatedQueryHandler<FaqCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqCategoryEntityService.name)
  }

}

import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedCategoryQuery } from '../impl/get-paginated-category.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@QueryHandler(GetPaginatedCategoryQuery)
export class GetPaginatedCategoryQueryHandler extends GetPaginatedQueryHandler<CategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CategoryEntityService.name)
  }

}

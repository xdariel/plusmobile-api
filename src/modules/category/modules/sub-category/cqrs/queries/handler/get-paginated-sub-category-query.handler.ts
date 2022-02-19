import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedSubCategoryQuery } from '../impl/get-paginated-sub-category.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@QueryHandler(GetPaginatedSubCategoryQuery)
export class GetPaginatedSubCategoryQueryHandler extends GetPaginatedQueryHandler<SubCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubCategoryEntityService.name)
  }

}

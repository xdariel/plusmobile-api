import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllCategoryQuery } from '../impl/get-all-category.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@QueryHandler(GetAllCategoryQuery)
export class GetAllCategoryQueryHandler extends GetAllQueryHandler<CategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CategoryEntityService.name)
  }

}

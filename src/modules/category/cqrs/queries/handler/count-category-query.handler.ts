import { QueryHandler } from '@nestjs/cqrs';
import { CountCategoryQuery } from '../impl/count-category.query';

import { ModuleRef } from '@nestjs/core';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountCategoryQuery)
export class CountCategoryQueryHandler extends CountQueryHandler<CategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CategoryEntityService.name)
  }

}

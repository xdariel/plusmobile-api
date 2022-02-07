import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneCategoryQuery } from '../impl/get-one-category.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@QueryHandler(GetOneCategoryQuery)
export class GetOneCategoryQueryHandler extends GetOneQueryHandler<CategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, CategoryEntityService.name)
  }
}


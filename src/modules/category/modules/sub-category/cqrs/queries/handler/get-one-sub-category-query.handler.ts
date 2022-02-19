import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneSubCategoryQuery } from '../impl/get-one-sub-category.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@QueryHandler(GetOneSubCategoryQuery)
export class GetOneSubCategoryQueryHandler extends GetOneQueryHandler<SubCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubCategoryEntityService.name)
  }
}


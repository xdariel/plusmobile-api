import { QueryHandler } from '@nestjs/cqrs';
import { CountSubCategoryQuery } from '../impl/count-sub-category.query';

import { ModuleRef } from '@nestjs/core';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountSubCategoryQuery)
export class CountSubCategoryQueryHandler extends CountQueryHandler<SubCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubCategoryEntityService.name)
  }

}

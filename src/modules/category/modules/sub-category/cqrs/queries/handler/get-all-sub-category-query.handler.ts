import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllSubCategoryQuery } from '../impl/get-all-sub-category.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@QueryHandler(GetAllSubCategoryQuery)
export class GetAllSubCategoryQueryHandler extends GetAllQueryHandler<SubCategoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SubCategoryEntityService.name)
  }

}

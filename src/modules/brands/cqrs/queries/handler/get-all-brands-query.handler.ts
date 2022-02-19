import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllBrandsQuery } from '../impl/get-all-brands.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@QueryHandler(GetAllBrandsQuery)
export class GetAllBrandsQueryHandler extends GetAllQueryHandler<BrandsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BrandsEntityService.name)
  }

}

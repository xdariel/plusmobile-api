import { QueryHandler } from '@nestjs/cqrs';
import { CountBrandsQuery } from '../impl/count-brands.query';

import { ModuleRef } from '@nestjs/core';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountBrandsQuery)
export class CountBrandsQueryHandler extends CountQueryHandler<BrandsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BrandsEntityService.name)
  }

}

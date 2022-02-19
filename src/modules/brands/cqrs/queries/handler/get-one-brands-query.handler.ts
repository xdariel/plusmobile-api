import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneBrandsQuery } from '../impl/get-one-brands.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@QueryHandler(GetOneBrandsQuery)
export class GetOneBrandsQueryHandler extends GetOneQueryHandler<BrandsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BrandsEntityService.name)
  }
}


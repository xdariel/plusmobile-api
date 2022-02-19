import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneStoreQuery } from '../impl/get-one-store.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@QueryHandler(GetOneStoreQuery)
export class GetOneStoreQueryHandler extends GetOneQueryHandler<StoreEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, StoreEntityService.name)
  }
}


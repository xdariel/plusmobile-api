import { QueryHandler } from '@nestjs/cqrs';
import { CountStoreQuery } from '../impl/count-store.query';

import { ModuleRef } from '@nestjs/core';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountStoreQuery)
export class CountStoreQueryHandler extends CountQueryHandler<StoreEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, StoreEntityService.name)
  }

}

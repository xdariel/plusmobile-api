import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllStoreQuery } from '../impl/get-all-store.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@QueryHandler(GetAllStoreQuery)
export class GetAllStoreQueryHandler extends GetAllQueryHandler<StoreEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, StoreEntityService.name)
  }

}

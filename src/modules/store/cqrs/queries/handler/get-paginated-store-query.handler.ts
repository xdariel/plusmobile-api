import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedStoreQuery } from '../impl/get-paginated-store.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@QueryHandler(GetPaginatedStoreQuery)
export class GetPaginatedStoreQueryHandler extends GetPaginatedQueryHandler<StoreEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, StoreEntityService.name)
  }

}

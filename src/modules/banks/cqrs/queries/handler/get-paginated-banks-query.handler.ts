import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedBanksQuery } from '../impl/get-paginated-banks.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@QueryHandler(GetPaginatedBanksQuery)
export class GetPaginatedBanksQueryHandler extends GetPaginatedQueryHandler<BanksEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BanksEntityService.name)
  }

}

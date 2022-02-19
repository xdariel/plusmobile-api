import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneBanksQuery } from '../impl/get-one-banks.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@QueryHandler(GetOneBanksQuery)
export class GetOneBanksQueryHandler extends GetOneQueryHandler<BanksEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BanksEntityService.name)
  }
}


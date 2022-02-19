import { QueryHandler } from '@nestjs/cqrs';
import { CountBanksQuery } from '../impl/count-banks.query';

import { ModuleRef } from '@nestjs/core';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountBanksQuery)
export class CountBanksQueryHandler extends CountQueryHandler<BanksEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BanksEntityService.name)
  }

}

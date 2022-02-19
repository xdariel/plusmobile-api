import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllBanksQuery } from '../impl/get-all-banks.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@QueryHandler(GetAllBanksQuery)
export class GetAllBanksQueryHandler extends GetAllQueryHandler<BanksEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BanksEntityService.name)
  }

}

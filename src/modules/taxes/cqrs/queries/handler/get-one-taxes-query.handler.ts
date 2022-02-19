import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneTaxesQuery } from '../impl/get-one-taxes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@QueryHandler(GetOneTaxesQuery)
export class GetOneTaxesQueryHandler extends GetOneQueryHandler<TaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TaxesEntityService.name)
  }
}


import { QueryHandler } from '@nestjs/cqrs';
import { CountTaxesQuery } from '../impl/count-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountTaxesQuery)
export class CountTaxesQueryHandler extends CountQueryHandler<TaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TaxesEntityService.name)
  }

}

import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllTaxesQuery } from '../impl/get-all-taxes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@QueryHandler(GetAllTaxesQuery)
export class GetAllTaxesQueryHandler extends GetAllQueryHandler<TaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TaxesEntityService.name)
  }

}

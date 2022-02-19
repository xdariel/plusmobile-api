import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedTaxesQuery } from '../impl/get-paginated-taxes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@QueryHandler(GetPaginatedTaxesQuery)
export class GetPaginatedTaxesQueryHandler extends GetPaginatedQueryHandler<TaxesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, TaxesEntityService.name)
  }

}

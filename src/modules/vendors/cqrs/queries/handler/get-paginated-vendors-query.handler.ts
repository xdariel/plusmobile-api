import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedVendorsQuery } from '../impl/get-paginated-vendors.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@QueryHandler(GetPaginatedVendorsQuery)
export class GetPaginatedVendorsQueryHandler extends GetPaginatedQueryHandler<VendorsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VendorsEntityService.name)
  }

}

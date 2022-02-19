import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllVendorsQuery } from '../impl/get-all-vendors.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@QueryHandler(GetAllVendorsQuery)
export class GetAllVendorsQueryHandler extends GetAllQueryHandler<VendorsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VendorsEntityService.name)
  }

}

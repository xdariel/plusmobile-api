import { QueryHandler } from '@nestjs/cqrs';
import { CountVendorsQuery } from '../impl/count-vendors.query';

import { ModuleRef } from '@nestjs/core';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountVendorsQuery)
export class CountVendorsQueryHandler extends CountQueryHandler<VendorsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VendorsEntityService.name)
  }

}

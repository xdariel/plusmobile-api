import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneVendorsQuery } from '../impl/get-one-vendors.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@QueryHandler(GetOneVendorsQuery)
export class GetOneVendorsQueryHandler extends GetOneQueryHandler<VendorsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VendorsEntityService.name)
  }
}


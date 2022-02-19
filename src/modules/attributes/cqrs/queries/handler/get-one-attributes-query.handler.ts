import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneAttributesQuery } from '../impl/get-one-attributes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@QueryHandler(GetOneAttributesQuery)
export class GetOneAttributesQueryHandler extends GetOneQueryHandler<AttributesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AttributesEntityService.name)
  }
}


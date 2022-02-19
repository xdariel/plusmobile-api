import { QueryHandler } from '@nestjs/cqrs';
import { CountAttributesQuery } from '../impl/count-attributes.query';

import { ModuleRef } from '@nestjs/core';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountAttributesQuery)
export class CountAttributesQueryHandler extends CountQueryHandler<AttributesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AttributesEntityService.name)
  }

}

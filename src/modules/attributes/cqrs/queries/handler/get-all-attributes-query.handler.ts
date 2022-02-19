import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllAttributesQuery } from '../impl/get-all-attributes.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@QueryHandler(GetAllAttributesQuery)
export class GetAllAttributesQueryHandler extends GetAllQueryHandler<AttributesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AttributesEntityService.name)
  }

}

import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedAttributesQuery } from '../impl/get-paginated-attributes.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@QueryHandler(GetPaginatedAttributesQuery)
export class GetPaginatedAttributesQueryHandler extends GetPaginatedQueryHandler<AttributesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AttributesEntityService.name)
  }

}

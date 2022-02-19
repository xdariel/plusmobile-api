import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedBrandsQuery } from '../impl/get-paginated-brands.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@QueryHandler(GetPaginatedBrandsQuery)
export class GetPaginatedBrandsQueryHandler extends GetPaginatedQueryHandler<BrandsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, BrandsEntityService.name)
  }

}

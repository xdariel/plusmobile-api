import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFaqQuery } from '../impl/get-paginated-faq.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@QueryHandler(GetPaginatedFaqQuery)
export class GetPaginatedFaqQueryHandler extends GetPaginatedQueryHandler<FaqEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqEntityService.name)
  }

}

import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFaqQuery } from '../impl/get-one-faq.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@QueryHandler(GetOneFaqQuery)
export class GetOneFaqQueryHandler extends GetOneQueryHandler<FaqEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqEntityService.name)
  }
}


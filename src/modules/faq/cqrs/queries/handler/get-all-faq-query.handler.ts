import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFaqQuery } from '../impl/get-all-faq.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@QueryHandler(GetAllFaqQuery)
export class GetAllFaqQueryHandler extends GetAllQueryHandler<FaqEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqEntityService.name)
  }

}

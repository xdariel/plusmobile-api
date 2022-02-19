import { QueryHandler } from '@nestjs/cqrs';
import { CountFaqQuery } from '../impl/count-faq.query';

import { ModuleRef } from '@nestjs/core';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountFaqQuery)
export class CountFaqQueryHandler extends CountQueryHandler<FaqEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FaqEntityService.name)
  }

}

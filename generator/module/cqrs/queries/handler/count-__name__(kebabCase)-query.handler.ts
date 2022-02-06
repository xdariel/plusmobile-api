import { QueryHandler } from '@nestjs/cqrs';
import { Count__name__Query } from '../impl/count-__name__(kebabCase).query';

import { ModuleRef } from '@nestjs/core';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { __name__EntityService } from '../../../services/__name__(kebabCase)-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(Count__name__Query)
export class Count__name__QueryHandler extends CountQueryHandler<__name__Entity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, __name__EntityService.name)
  }

}

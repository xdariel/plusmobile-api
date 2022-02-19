import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllSupportTicketQuery } from '../impl/get-all-support-ticket.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@QueryHandler(GetAllSupportTicketQuery)
export class GetAllSupportTicketQueryHandler extends GetAllQueryHandler<SupportTicketEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SupportTicketEntityService.name)
  }

}

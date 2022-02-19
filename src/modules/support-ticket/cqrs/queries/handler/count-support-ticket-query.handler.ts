import { QueryHandler } from '@nestjs/cqrs';
import { CountSupportTicketQuery } from '../impl/count-support-ticket.query';

import { ModuleRef } from '@nestjs/core';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountSupportTicketQuery)
export class CountSupportTicketQueryHandler extends CountQueryHandler<SupportTicketEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SupportTicketEntityService.name)
  }

}

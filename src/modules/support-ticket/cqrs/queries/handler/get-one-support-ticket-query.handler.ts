import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneSupportTicketQuery } from '../impl/get-one-support-ticket.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@QueryHandler(GetOneSupportTicketQuery)
export class GetOneSupportTicketQueryHandler extends GetOneQueryHandler<SupportTicketEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SupportTicketEntityService.name)
  }
}


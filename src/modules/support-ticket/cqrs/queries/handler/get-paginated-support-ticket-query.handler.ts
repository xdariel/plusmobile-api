import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedSupportTicketQuery } from '../impl/get-paginated-support-ticket.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@QueryHandler(GetPaginatedSupportTicketQuery)
export class GetPaginatedSupportTicketQueryHandler extends GetPaginatedQueryHandler<SupportTicketEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, SupportTicketEntityService.name)
  }

}

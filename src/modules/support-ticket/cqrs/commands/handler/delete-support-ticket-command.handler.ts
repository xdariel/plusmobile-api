import { CommandHandler } from '@nestjs/cqrs';
import { DeleteSupportTicketCommand } from '../impl/delete-support-ticket.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@CommandHandler(DeleteSupportTicketCommand)
export class DeleteSupportTicketCommandHandler extends DeleteCommandHandler<SupportTicketEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SupportTicketEntityService.name)
  }
}

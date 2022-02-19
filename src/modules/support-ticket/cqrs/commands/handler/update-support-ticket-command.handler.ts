import { CommandHandler } from '@nestjs/cqrs';
import { UpdateSupportTicketCommand } from '../impl/update-support-ticket.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';

@CommandHandler(UpdateSupportTicketCommand)
export class UpdateSupportTicketCommandHandler extends UpdateCommandHandler<SupportTicketEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SupportTicketEntityService.name)
  }

}

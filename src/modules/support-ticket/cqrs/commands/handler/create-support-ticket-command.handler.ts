import { CommandHandler } from '@nestjs/cqrs';

import { CreateSupportTicketCommand } from '../impl/create-support-ticket.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@CommandHandler(CreateSupportTicketCommand)
export class CreateSupportTicketCommandHandler extends CreateCommandHandler<SupportTicketEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SupportTicketEntityService.name);
  }

}

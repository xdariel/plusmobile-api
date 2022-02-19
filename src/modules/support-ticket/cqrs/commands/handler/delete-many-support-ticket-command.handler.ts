import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManySupportTicketCommand } from '../impl/delete-many-support-ticket.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { SupportTicketEntityService } from '../../../services/support-ticket-entity.service';

@CommandHandler(DeleteManySupportTicketCommand)
export class DeleteManySupportTicketCommandHandler extends DeleteManyCommandHandler<SupportTicketEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SupportTicketEntityService.name)
  }

}

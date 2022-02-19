import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';

export class UpdateSupportTicketCommand extends UpdateCommand<SupportTicketEntity> {
  constructor(public entityId: string, update: Partial<SupportTicketEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

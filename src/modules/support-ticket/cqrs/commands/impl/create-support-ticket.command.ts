import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';

export class CreateSupportTicketCommand extends CreateCommand<SupportTicketEntity> {
  constructor(public request: SupportTicketEntity, public connection?: unknown) {
    super(request, connection);
  }
}

import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManySupportTicketCommand extends DeleteManyCommand<SupportTicketEntity>{
  constructor(public request: GetOneDto<SupportTicketEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountSupportTicketQuery extends CountQuery<SupportTicketEntity>{
  constructor(public request: CountDto<SupportTicketEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllSupportTicketQuery extends GetAllQuery<SupportTicketEntity>{
  constructor(public request: GetAllDto<SupportTicketEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

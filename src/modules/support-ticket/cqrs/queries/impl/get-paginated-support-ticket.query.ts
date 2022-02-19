import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedSupportTicketQuery extends GetPaginatedQuery<SupportTicketEntity>{
  constructor(public request: GetPaginatedDto<SupportTicketEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

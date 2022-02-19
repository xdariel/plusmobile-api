import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneSupportTicketQuery extends GetOneQuery<SupportTicketEntity> {
  constructor(public request: GetOneDto<SupportTicketEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

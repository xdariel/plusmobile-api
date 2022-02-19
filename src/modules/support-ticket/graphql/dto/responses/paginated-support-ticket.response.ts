import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { SupportTicketResponse } from './support-ticket.response';

@ObjectType()
export class PaginatedSupportTicketResponse extends PaginatedFindResultResponse(SupportTicketResponse) {
}


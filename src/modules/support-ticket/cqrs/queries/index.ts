import { GetAllSupportTicketQueryHandler } from './handler/get-all-support-ticket-query.handler';
import { GetPaginatedSupportTicketQueryHandler } from './handler/get-paginated-support-ticket-query.handler';
import { GetOneSupportTicketQueryHandler } from './handler/get-one-support-ticket-query.handler';
import { CountSupportTicketQueryHandler } from './handler/count-support-ticket-query.handler';
import { Provider } from '@nestjs/common';

export const SupportTicketQueryHandlers: Array<Provider> = [
  GetAllSupportTicketQueryHandler,
  GetPaginatedSupportTicketQueryHandler,
  GetOneSupportTicketQueryHandler,
  CountSupportTicketQueryHandler
];

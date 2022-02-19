import { CreateSupportTicketCommandHandler } from './handler/create-support-ticket-command.handler';
import { DeleteSupportTicketCommandHandler } from './handler/delete-support-ticket-command.handler';
import { UpdateSupportTicketCommandHandler } from './handler/update-support-ticket-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManySupportTicketCommandHandler } from './handler/delete-many-support-ticket-command.handler';

export const SupportTicketCommandHandlers: Array<Provider> = [
  CreateSupportTicketCommandHandler,
  DeleteSupportTicketCommandHandler,
  UpdateSupportTicketCommandHandler,
  DeleteManySupportTicketCommandHandler
];

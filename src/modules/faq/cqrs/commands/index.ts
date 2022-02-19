import { CreateFaqCommandHandler } from './handler/create-faq-command.handler';
import { DeleteFaqCommandHandler } from './handler/delete-faq-command.handler';
import { UpdateFaqCommandHandler } from './handler/update-faq-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFaqCommandHandler } from './handler/delete-many-faq-command.handler';

export const FaqCommandHandlers: Array<Provider> = [
  CreateFaqCommandHandler,
  DeleteFaqCommandHandler,
  UpdateFaqCommandHandler,
  DeleteManyFaqCommandHandler
];

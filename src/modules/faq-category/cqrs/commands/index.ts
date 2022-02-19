import { CreateFaqCategoryCommandHandler } from './handler/create-faq-category-command.handler';
import { DeleteFaqCategoryCommandHandler } from './handler/delete-faq-category-command.handler';
import { UpdateFaqCategoryCommandHandler } from './handler/update-faq-category-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFaqCategoryCommandHandler } from './handler/delete-many-faq-category-command.handler';

export const FaqCategoryCommandHandlers: Array<Provider> = [
  CreateFaqCategoryCommandHandler,
  DeleteFaqCategoryCommandHandler,
  UpdateFaqCategoryCommandHandler,
  DeleteManyFaqCategoryCommandHandler
];

import { CreateCategoryCommandHandler } from './handler/create-category-command.handler';
import { DeleteCategoryCommandHandler } from './handler/delete-category-command.handler';
import { UpdateCategoryCommandHandler } from './handler/update-category-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyCategoryCommandHandler } from './handler/delete-many-category-command.handler';

export const CategoryCommandHandlers: Array<Provider> = [
  CreateCategoryCommandHandler,
  DeleteCategoryCommandHandler,
  UpdateCategoryCommandHandler,
  DeleteManyCategoryCommandHandler
];

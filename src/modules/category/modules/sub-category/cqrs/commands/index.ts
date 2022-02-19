import { CreateSubCategoryCommandHandler } from './handler/create-sub-category-command.handler';
import { DeleteSubCategoryCommandHandler } from './handler/delete-sub-category-command.handler';
import { UpdateSubCategoryCommandHandler } from './handler/update-sub-category-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManySubCategoryCommandHandler } from './handler/delete-many-sub-category-command.handler';

export const SubCategoryCommandHandlers: Array<Provider> = [
  CreateSubCategoryCommandHandler,
  DeleteSubCategoryCommandHandler,
  UpdateSubCategoryCommandHandler,
  DeleteManySubCategoryCommandHandler
];

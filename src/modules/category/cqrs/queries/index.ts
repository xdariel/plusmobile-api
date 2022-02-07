import { GetAllCategoryQueryHandler } from './handler/get-all-category-query.handler';
import { GetPaginatedCategoryQueryHandler } from './handler/get-paginated-category-query.handler';
import { GetOneCategoryQueryHandler } from './handler/get-one-category-query.handler';
import { CountCategoryQueryHandler } from './handler/count-category-query.handler';
import { Provider } from '@nestjs/common';

export const CategoryQueryHandlers: Array<Provider> = [
  GetAllCategoryQueryHandler,
  GetPaginatedCategoryQueryHandler,
  GetOneCategoryQueryHandler,
  CountCategoryQueryHandler
];

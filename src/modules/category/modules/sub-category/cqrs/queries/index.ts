import { GetAllSubCategoryQueryHandler } from './handler/get-all-sub-category-query.handler';
import { GetPaginatedSubCategoryQueryHandler } from './handler/get-paginated-sub-category-query.handler';
import { GetOneSubCategoryQueryHandler } from './handler/get-one-sub-category-query.handler';
import { CountSubCategoryQueryHandler } from './handler/count-sub-category-query.handler';
import { Provider } from '@nestjs/common';

export const SubCategoryQueryHandlers: Array<Provider> = [
  GetAllSubCategoryQueryHandler,
  GetPaginatedSubCategoryQueryHandler,
  GetOneSubCategoryQueryHandler,
  CountSubCategoryQueryHandler
];

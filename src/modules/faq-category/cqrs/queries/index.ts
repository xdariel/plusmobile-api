import { GetAllFaqCategoryQueryHandler } from './handler/get-all-faq-category-query.handler';
import { GetPaginatedFaqCategoryQueryHandler } from './handler/get-paginated-faq-category-query.handler';
import { GetOneFaqCategoryQueryHandler } from './handler/get-one-faq-category-query.handler';
import { CountFaqCategoryQueryHandler } from './handler/count-faq-category-query.handler';
import { Provider } from '@nestjs/common';

export const FaqCategoryQueryHandlers: Array<Provider> = [
  GetAllFaqCategoryQueryHandler,
  GetPaginatedFaqCategoryQueryHandler,
  GetOneFaqCategoryQueryHandler,
  CountFaqCategoryQueryHandler
];

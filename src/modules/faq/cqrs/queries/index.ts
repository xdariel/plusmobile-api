import { GetAllFaqQueryHandler } from './handler/get-all-faq-query.handler';
import { GetPaginatedFaqQueryHandler } from './handler/get-paginated-faq-query.handler';
import { GetOneFaqQueryHandler } from './handler/get-one-faq-query.handler';
import { CountFaqQueryHandler } from './handler/count-faq-query.handler';
import { Provider } from '@nestjs/common';

export const FaqQueryHandlers: Array<Provider> = [
  GetAllFaqQueryHandler,
  GetPaginatedFaqQueryHandler,
  GetOneFaqQueryHandler,
  CountFaqQueryHandler
];

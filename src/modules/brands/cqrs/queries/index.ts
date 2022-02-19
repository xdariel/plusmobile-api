import { GetAllBrandsQueryHandler } from './handler/get-all-brands-query.handler';
import { GetPaginatedBrandsQueryHandler } from './handler/get-paginated-brands-query.handler';
import { GetOneBrandsQueryHandler } from './handler/get-one-brands-query.handler';
import { CountBrandsQueryHandler } from './handler/count-brands-query.handler';
import { Provider } from '@nestjs/common';

export const BrandsQueryHandlers: Array<Provider> = [
  GetAllBrandsQueryHandler,
  GetPaginatedBrandsQueryHandler,
  GetOneBrandsQueryHandler,
  CountBrandsQueryHandler
];

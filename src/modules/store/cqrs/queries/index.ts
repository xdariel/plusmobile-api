import { GetAllStoreQueryHandler } from './handler/get-all-store-query.handler';
import { GetPaginatedStoreQueryHandler } from './handler/get-paginated-store-query.handler';
import { GetOneStoreQueryHandler } from './handler/get-one-store-query.handler';
import { CountStoreQueryHandler } from './handler/count-store-query.handler';
import { Provider } from '@nestjs/common';

export const StoreQueryHandlers: Array<Provider> = [
  GetAllStoreQueryHandler,
  GetPaginatedStoreQueryHandler,
  GetOneStoreQueryHandler,
  CountStoreQueryHandler
];

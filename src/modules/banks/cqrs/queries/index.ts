import { GetAllBanksQueryHandler } from './handler/get-all-banks-query.handler';
import { GetPaginatedBanksQueryHandler } from './handler/get-paginated-banks-query.handler';
import { GetOneBanksQueryHandler } from './handler/get-one-banks-query.handler';
import { CountBanksQueryHandler } from './handler/count-banks-query.handler';
import { Provider } from '@nestjs/common';

export const BanksQueryHandlers: Array<Provider> = [
  GetAllBanksQueryHandler,
  GetPaginatedBanksQueryHandler,
  GetOneBanksQueryHandler,
  CountBanksQueryHandler
];

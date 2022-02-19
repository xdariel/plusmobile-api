import { GetAllVendorsQueryHandler } from './handler/get-all-vendors-query.handler';
import { GetPaginatedVendorsQueryHandler } from './handler/get-paginated-vendors-query.handler';
import { GetOneVendorsQueryHandler } from './handler/get-one-vendors-query.handler';
import { CountVendorsQueryHandler } from './handler/count-vendors-query.handler';
import { Provider } from '@nestjs/common';

export const VendorsQueryHandlers: Array<Provider> = [
  GetAllVendorsQueryHandler,
  GetPaginatedVendorsQueryHandler,
  GetOneVendorsQueryHandler,
  CountVendorsQueryHandler
];

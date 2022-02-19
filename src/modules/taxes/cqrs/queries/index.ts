import { GetAllTaxesQueryHandler } from './handler/get-all-taxes-query.handler';
import { GetPaginatedTaxesQueryHandler } from './handler/get-paginated-taxes-query.handler';
import { GetOneTaxesQueryHandler } from './handler/get-one-taxes-query.handler';
import { CountTaxesQueryHandler } from './handler/count-taxes-query.handler';
import { Provider } from '@nestjs/common';

export const TaxesQueryHandlers: Array<Provider> = [
  GetAllTaxesQueryHandler,
  GetPaginatedTaxesQueryHandler,
  GetOneTaxesQueryHandler,
  CountTaxesQueryHandler
];

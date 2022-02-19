import { GetAllProductsQueryHandler } from './handler/get-all-products-query.handler';
import { GetPaginatedProductsQueryHandler } from './handler/get-paginated-products-query.handler';
import { GetOneProductsQueryHandler } from './handler/get-one-products-query.handler';
import { CountProductsQueryHandler } from './handler/count-products-query.handler';
import { Provider } from '@nestjs/common';

export const ProductsQueryHandlers: Array<Provider> = [
  GetAllProductsQueryHandler,
  GetPaginatedProductsQueryHandler,
  GetOneProductsQueryHandler,
  CountProductsQueryHandler
];

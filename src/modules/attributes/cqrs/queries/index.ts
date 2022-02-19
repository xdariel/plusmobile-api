import { GetAllAttributesQueryHandler } from './handler/get-all-attributes-query.handler';
import { GetPaginatedAttributesQueryHandler } from './handler/get-paginated-attributes-query.handler';
import { GetOneAttributesQueryHandler } from './handler/get-one-attributes-query.handler';
import { CountAttributesQueryHandler } from './handler/count-attributes-query.handler';
import { Provider } from '@nestjs/common';

export const AttributesQueryHandlers: Array<Provider> = [
  GetAllAttributesQueryHandler,
  GetPaginatedAttributesQueryHandler,
  GetOneAttributesQueryHandler,
  CountAttributesQueryHandler
];

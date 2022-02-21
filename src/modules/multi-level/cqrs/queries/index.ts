import { GetNodesQueryHandler } from './handler/get-nodes-query.handler';
import { Provider } from '@nestjs/common';

export const MultiLevelQueryHandlers: Array<Provider> = [
  GetNodesQueryHandler,
];

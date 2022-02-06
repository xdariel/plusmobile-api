import { CountUsersQueryHandler } from './handler/count-users-query.handler';
import { GetAllUsersQueryHandler } from './handler/get-all-users-query.handler';
import { GetOneUserQueryHandler } from './handler/get-one-user-query.handler';
import { GetPaginatedUsersQueryHandler } from './handler/get-paginated-users-query.handler';
import { GetUserByRefCodeQueryHandler } from './handler/get-user-by-ref-code-query.handler';

export const UserQueryHandlers = [
  GetAllUsersQueryHandler,
  GetOneUserQueryHandler,
  GetPaginatedUsersQueryHandler,
  CountUsersQueryHandler,
  GetUserByRefCodeQueryHandler,
];

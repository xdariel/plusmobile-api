import { Provider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { DBUser } from './types/db-user.type';

export const DB_USER = 'DB_USER';

export const AvailableDataAccessProviders: Array<Provider> = [
  {
    provide: DB_USER,
    scope: Scope.REQUEST,
    inject: [REQUEST],
    useFactory: (
      request: any,
    ): DBUser | null => {
      if (!request) {
        return null;
      }
      let authUser = undefined;

      if (request?.user) {
        authUser = request?.user;
      } else if (request.req && request.req.connectionParams) {
        const { req } = request;
        authUser = req?.user;
      } else {
        const req = request?.req;
        authUser = req?.user;
      }

      return {
        id: authUser?.userId,
        email: authUser?.email,
      };
    },
  },
];

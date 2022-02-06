import { Provider, Scope } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { REQUEST } from '@nestjs/core';
import { AuthUser } from '../modules/auth/types/auth-user.type';


export const AUTH_USER = 'AUTH_USER';

export const AuthProviders: Array<Provider> = [
  {
    provide: AUTH_USER,
    scope: Scope.REQUEST,
    inject: [REQUEST],
    useFactory: (
      request: any,
    ): AuthUser | null => {
      if (!request) {
        return null;
      }

      if (request?.user) {
        return request?.user as AuthUser
      } else if (request.req && request.req.connectionParams) {
        const { req } = request;
        return req?.user as AuthUser
      } else {
        const req = request?.req ;
        return req?.user as AuthUser
      }
    },
  },

];
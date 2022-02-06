import { AuthUser } from '../modules/auth/types/auth-user.type';

export default class AuthUtils {
  public static extractUser = (request: any): AuthUser | null => {
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
  };



}

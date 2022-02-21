import { PermitsType } from '../../../resources/permits.type';
import { UserType } from '../../user/entities/user.entity';

export type AuthPermit = PermitsType


export type AuthRole = {
  id: string;
  name: string;
  permits: Array<AuthPermit>
}


export type AuthUser = {
  userId: string;
  email: string;
  username?: string;
  firstname: string;
  roles: Array<AuthRole>;
  lastname: string;
  verified: boolean;
  isActive: boolean;
  isAdmin: boolean;
  type: UserType,
  avatarFile?: {
    id: string
    key?: string;
    url?: string;
  }
}

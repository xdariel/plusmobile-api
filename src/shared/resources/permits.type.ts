import { APP_MODULES } from './modules.enum';


export enum ACTION_LIST {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  GET_ALL = 'GET_ALL',
  GET_ALL_OWN = 'GET_ALL_OWN',

  GET_PAGINATED = 'GET_PAGINATED',
  GET_PAGINATED_OWN = 'GET_PAGINATED_OWN',

  FILES_CREATE_UPLOADED_FILE = 'FILES_CREATE_UPLOADED_FILE',

  ENTERPRISE_SET = 'ENTERPRISE_SET',
  SETTINGS_SET = 'SETTINGS_SET',
  CANDIDATE_CONVERT_IN_STUDENT = 'CANDIDATE_CONVERT_IN_STUDENT',
  PAYROLL_SETTLEMENTS_GROUPED_PAGED = 'PAYROLL_SETTLEMENTS_GROUPED_PAGED',
  PAYROLL_SETTLEMENTS_MARK_AS_PAID = 'PAYROLL_SETTLEMENTS_MARK_AS_PAID'
}

export type PermitsType = {
  module: APP_MODULES,
  action: ACTION_LIST
}


/*export type PermitsType2<T> = {
  module: APP_MODULES,
  action: T
}

enum TENANTS{
  A= 'A',
  B= 'B'
}

export const Animals = { ACTION_LIST, TENANTS };
export type Animals = typeof Animals;

type COMBINED = (typeof ACTION_LIST) & (typeof TENANTS);


// @ts-ignore
const a: PermitsType2<COMBINED> = { module: APP_MODULES.TENANTS, action: ACTION_LIST.GET_ALL };

console.log(a.action)


//const a: PermitsType = { module: APP_MODULES.TENANTS, action:ACTION_LIST.TENANT_GET_CONNECTION };*/


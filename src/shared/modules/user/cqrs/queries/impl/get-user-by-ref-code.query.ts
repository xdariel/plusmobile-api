import { AppQuery } from '../../../../app-cqrs/base/AppQuery';

export class GetUserByRefCodeQuery extends AppQuery {
  constructor(public request: { refCode: string }) {
    super();
  }
}
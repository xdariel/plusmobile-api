import { AppQuery } from 'src/shared/modules/app-cqrs/base/AppQuery';

export class GetNodesQuery extends AppQuery {
  constructor(public request: { userId: string }) {
    super();
  }
}

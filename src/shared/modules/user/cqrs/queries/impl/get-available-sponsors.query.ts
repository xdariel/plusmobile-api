import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { IAssociatedUserFilter } from '../../../interfaces/IAssociatedUserFilter';

export class GetAvailableSponsorsQuery extends AppQuery {
  constructor(public request: { userId?: string }) {
    super();
  }
}
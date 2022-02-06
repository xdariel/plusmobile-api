
import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { IDocDefinition } from '../../../interfaces/IDocDefinition';

export class GetPdfBufferQuery extends AppQuery{
  constructor(public request: {filename: string, def: IDocDefinition}) {
    super()
  }
}

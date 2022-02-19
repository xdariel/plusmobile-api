import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { TaxesEntity } from '../../../entities/taxes.entity';

export class CreateTaxesCommand extends CreateCommand<TaxesEntity> {
  constructor(public request: TaxesEntity, public connection?: unknown) {
    super(request, connection);
  }
}

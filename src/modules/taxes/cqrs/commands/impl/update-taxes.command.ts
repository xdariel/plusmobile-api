import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { TaxesEntity } from '../../../entities/taxes.entity';

export class UpdateTaxesCommand extends UpdateCommand<TaxesEntity> {
  constructor(public entityId: string, update: Partial<TaxesEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

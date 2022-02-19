import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { VendorsEntity } from '../../../entities/vendors.entity';

export class UpdateVendorsCommand extends UpdateCommand<VendorsEntity> {
  constructor(public entityId: string, update: Partial<VendorsEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

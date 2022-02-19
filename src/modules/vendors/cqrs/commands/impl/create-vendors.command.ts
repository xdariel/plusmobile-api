import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { VendorsEntity } from '../../../entities/vendors.entity';

export class CreateVendorsCommand extends CreateCommand<VendorsEntity> {
  constructor(public request: VendorsEntity, public connection?: unknown) {
    super(request, connection);
  }
}

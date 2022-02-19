import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { StoreEntity } from '../../../entities/store.entity';

export class UpdateStoreCommand extends UpdateCommand<StoreEntity> {
  constructor(public entityId: string, update: Partial<StoreEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { StoreEntity } from '../../../entities/store.entity';

export class CreateStoreCommand extends CreateCommand<StoreEntity> {
  constructor(public request: StoreEntity, public connection?: unknown) {
    super(request, connection);
  }
}

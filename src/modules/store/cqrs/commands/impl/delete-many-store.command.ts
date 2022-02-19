import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { StoreEntity } from '../../../entities/store.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyStoreCommand extends DeleteManyCommand<StoreEntity>{
  constructor(public request: GetOneDto<StoreEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

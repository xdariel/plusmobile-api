import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { StoreEntity } from '../../../entities/store.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneStoreQuery extends GetOneQuery<StoreEntity> {
  constructor(public request: GetOneDto<StoreEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { StoreEntity } from '../../../entities/store.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedStoreQuery extends GetPaginatedQuery<StoreEntity>{
  constructor(public request: GetPaginatedDto<StoreEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

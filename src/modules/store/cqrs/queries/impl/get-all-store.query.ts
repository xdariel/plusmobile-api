import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { StoreEntity } from '../../../entities/store.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllStoreQuery extends GetAllQuery<StoreEntity>{
  constructor(public request: GetAllDto<StoreEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

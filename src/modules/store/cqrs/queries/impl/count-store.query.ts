import { StoreEntity } from '../../../entities/store.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountStoreQuery extends CountQuery<StoreEntity>{
  constructor(public request: CountDto<StoreEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedVendorsQuery extends GetPaginatedQuery<VendorsEntity>{
  constructor(public request: GetPaginatedDto<VendorsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

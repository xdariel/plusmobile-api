import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { BrandsEntity } from '../../../entities/brands.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedBrandsQuery extends GetPaginatedQuery<BrandsEntity>{
  constructor(public request: GetPaginatedDto<BrandsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

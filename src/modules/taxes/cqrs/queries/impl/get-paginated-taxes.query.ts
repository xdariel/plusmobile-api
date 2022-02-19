import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedTaxesQuery extends GetPaginatedQuery<TaxesEntity>{
  constructor(public request: GetPaginatedDto<TaxesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

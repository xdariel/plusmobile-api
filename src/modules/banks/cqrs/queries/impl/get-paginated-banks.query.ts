import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { BanksEntity } from '../../../entities/banks.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedBanksQuery extends GetPaginatedQuery<BanksEntity>{
  constructor(public request: GetPaginatedDto<BanksEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { BanksEntity } from '../../../entities/banks.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneBanksQuery extends GetOneQuery<BanksEntity> {
  constructor(public request: GetOneDto<BanksEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

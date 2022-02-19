import { BanksEntity } from '../../../entities/banks.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountBanksQuery extends CountQuery<BanksEntity>{
  constructor(public request: CountDto<BanksEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

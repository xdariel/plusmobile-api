import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { BanksEntity } from '../../../entities/banks.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllBanksQuery extends GetAllQuery<BanksEntity>{
  constructor(public request: GetAllDto<BanksEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

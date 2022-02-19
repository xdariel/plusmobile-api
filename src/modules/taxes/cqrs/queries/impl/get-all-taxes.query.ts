import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllTaxesQuery extends GetAllQuery<TaxesEntity>{
  constructor(public request: GetAllDto<TaxesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

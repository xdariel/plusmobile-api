import { TaxesEntity } from '../../../entities/taxes.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountTaxesQuery extends CountQuery<TaxesEntity>{
  constructor(public request: CountDto<TaxesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

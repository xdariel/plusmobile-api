import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneTaxesQuery extends GetOneQuery<TaxesEntity> {
  constructor(public request: GetOneDto<TaxesEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

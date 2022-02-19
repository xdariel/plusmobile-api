import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { BrandsEntity } from '../../../entities/brands.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneBrandsQuery extends GetOneQuery<BrandsEntity> {
  constructor(public request: GetOneDto<BrandsEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

import { BrandsEntity } from '../../../entities/brands.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountBrandsQuery extends CountQuery<BrandsEntity>{
  constructor(public request: CountDto<BrandsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

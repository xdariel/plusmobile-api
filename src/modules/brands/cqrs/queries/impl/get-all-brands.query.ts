import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { BrandsEntity } from '../../../entities/brands.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllBrandsQuery extends GetAllQuery<BrandsEntity>{
  constructor(public request: GetAllDto<BrandsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ProductsEntity } from '../../../entities/products.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllProductsQuery extends GetAllQuery<ProductsEntity>{
  constructor(public request: GetAllDto<ProductsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { ProductsEntity } from '../../../entities/products.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountProductsQuery extends CountQuery<ProductsEntity>{
  constructor(public request: CountDto<ProductsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ProductsEntity } from '../../../entities/products.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneProductsQuery extends GetOneQuery<ProductsEntity> {
  constructor(public request: GetOneDto<ProductsEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

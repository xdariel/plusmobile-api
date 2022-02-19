import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ProductsEntity } from '../../../entities/products.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedProductsQuery extends GetPaginatedQuery<ProductsEntity>{
  constructor(public request: GetPaginatedDto<ProductsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ProductsEntity } from '../../../entities/products.entity';

export class CreateProductsCommand extends CreateCommand<ProductsEntity> {
  constructor(public request: ProductsEntity, public connection?: unknown) {
    super(request, connection);
  }
}

import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProductsEntity } from '../../../entities/products.entity';

export class UpdateProductsCommand extends UpdateCommand<ProductsEntity> {
  constructor(public entityId: string, update: Partial<ProductsEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

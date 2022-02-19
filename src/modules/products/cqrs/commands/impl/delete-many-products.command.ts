import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ProductsEntity } from '../../../entities/products.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyProductsCommand extends DeleteManyCommand<ProductsEntity>{
  constructor(public request: GetOneDto<ProductsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

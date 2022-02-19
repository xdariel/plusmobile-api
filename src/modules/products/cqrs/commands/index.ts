import { CreateProductsCommandHandler } from './handler/create-products-command.handler';
import { DeleteProductsCommandHandler } from './handler/delete-products-command.handler';
import { UpdateProductsCommandHandler } from './handler/update-products-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyProductsCommandHandler } from './handler/delete-many-products-command.handler';

export const ProductsCommandHandlers: Array<Provider> = [
  CreateProductsCommandHandler,
  DeleteProductsCommandHandler,
  UpdateProductsCommandHandler,
  DeleteManyProductsCommandHandler
];

import { CommandHandler } from '@nestjs/cqrs';

import { CreateProductsCommand } from '../impl/create-products.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@CommandHandler(CreateProductsCommand)
export class CreateProductsCommandHandler extends CreateCommandHandler<ProductsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductsEntityService.name);
  }

}

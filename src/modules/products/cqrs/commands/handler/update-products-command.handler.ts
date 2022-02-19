import { CommandHandler } from '@nestjs/cqrs';
import { UpdateProductsCommand } from '../impl/update-products.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ProductsEntityService } from '../../../services/products-entity.service';
import { ProductsEntity } from '../../../entities/products.entity';

@CommandHandler(UpdateProductsCommand)
export class UpdateProductsCommandHandler extends UpdateCommandHandler<ProductsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductsEntityService.name)
  }

}

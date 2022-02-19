import { CommandHandler } from '@nestjs/cqrs';
import { DeleteProductsCommand } from '../impl/delete-products.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@CommandHandler(DeleteProductsCommand)
export class DeleteProductsCommandHandler extends DeleteCommandHandler<ProductsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductsEntityService.name)
  }
}

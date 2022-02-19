import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyProductsCommand } from '../impl/delete-many-products.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ProductsEntity } from '../../../entities/products.entity';
import { ProductsEntityService } from '../../../services/products-entity.service';

@CommandHandler(DeleteManyProductsCommand)
export class DeleteManyProductsCommandHandler extends DeleteManyCommandHandler<ProductsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductsEntityService.name)
  }

}

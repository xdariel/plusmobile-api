import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyCategoryCommand } from '../impl/delete-many-category.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@CommandHandler(DeleteManyCategoryCommand)
export class DeleteManyCategoryCommandHandler extends DeleteManyCommandHandler<CategoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, CategoryEntityService.name)
  }

}

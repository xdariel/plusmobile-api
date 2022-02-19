import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManySubCategoryCommand } from '../impl/delete-many-sub-category.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@CommandHandler(DeleteManySubCategoryCommand)
export class DeleteManySubCategoryCommandHandler extends DeleteManyCommandHandler<SubCategoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SubCategoryEntityService.name)
  }

}

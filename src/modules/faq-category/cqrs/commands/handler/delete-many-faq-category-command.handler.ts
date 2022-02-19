import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFaqCategoryCommand } from '../impl/delete-many-faq-category.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@CommandHandler(DeleteManyFaqCategoryCommand)
export class DeleteManyFaqCategoryCommandHandler extends DeleteManyCommandHandler<FaqCategoryEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FaqCategoryEntityService.name)
  }

}

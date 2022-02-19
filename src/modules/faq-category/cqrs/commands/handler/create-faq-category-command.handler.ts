import { CommandHandler } from '@nestjs/cqrs';

import { CreateFaqCategoryCommand } from '../impl/create-faq-category.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@CommandHandler(CreateFaqCategoryCommand)
export class CreateFaqCategoryCommandHandler extends CreateCommandHandler<FaqCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FaqCategoryEntityService.name);
  }

}

import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFaqCategoryCommand } from '../impl/update-faq-category.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';

@CommandHandler(UpdateFaqCategoryCommand)
export class UpdateFaqCategoryCommandHandler extends UpdateCommandHandler<FaqCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FaqCategoryEntityService.name)
  }

}

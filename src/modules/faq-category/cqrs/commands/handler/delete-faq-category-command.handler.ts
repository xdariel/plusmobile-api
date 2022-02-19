import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFaqCategoryCommand } from '../impl/delete-faq-category.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { FaqCategoryEntityService } from '../../../services/faq-category-entity.service';

@CommandHandler(DeleteFaqCategoryCommand)
export class DeleteFaqCategoryCommandHandler extends DeleteCommandHandler<FaqCategoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FaqCategoryEntityService.name)
  }
}

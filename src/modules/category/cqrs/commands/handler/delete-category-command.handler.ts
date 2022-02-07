import { CommandHandler } from '@nestjs/cqrs';
import { DeleteCategoryCommand } from '../impl/delete-category.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryCommandHandler extends DeleteCommandHandler<CategoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, CategoryEntityService.name)
  }
}

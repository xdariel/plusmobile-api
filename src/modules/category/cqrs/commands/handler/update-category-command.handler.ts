import { CommandHandler } from '@nestjs/cqrs';
import { UpdateCategoryCommand } from '../impl/update-category.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { CategoryEntityService } from '../../../services/category-entity.service';
import { CategoryEntity } from '../../../entities/category.entity';

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler extends UpdateCommandHandler<CategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, CategoryEntityService.name)
  }

}

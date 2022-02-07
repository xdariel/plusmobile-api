import { CommandHandler } from '@nestjs/cqrs';

import { CreateCategoryCommand } from '../impl/create-category.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { CategoryEntity } from '../../../entities/category.entity';
import { CategoryEntityService } from '../../../services/category-entity.service';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler extends CreateCommandHandler<CategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, CategoryEntityService.name);
  }

}

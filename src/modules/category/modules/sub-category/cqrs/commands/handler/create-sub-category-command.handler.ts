import { CommandHandler } from '@nestjs/cqrs';

import { CreateSubCategoryCommand } from '../impl/create-sub-category.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@CommandHandler(CreateSubCategoryCommand)
export class CreateSubCategoryCommandHandler extends CreateCommandHandler<SubCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SubCategoryEntityService.name);
  }

}

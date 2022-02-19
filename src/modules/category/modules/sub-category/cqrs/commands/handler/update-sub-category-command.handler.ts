import { CommandHandler } from '@nestjs/cqrs';
import { UpdateSubCategoryCommand } from '../impl/update-sub-category.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';

@CommandHandler(UpdateSubCategoryCommand)
export class UpdateSubCategoryCommandHandler extends UpdateCommandHandler<SubCategoryEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SubCategoryEntityService.name)
  }

}

import { CommandHandler } from '@nestjs/cqrs';
import { DeleteSubCategoryCommand } from '../impl/delete-sub-category.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { SubCategoryEntityService } from '../../../services/sub-category-entity.service';

@CommandHandler(DeleteSubCategoryCommand)
export class DeleteSubCategoryCommandHandler extends DeleteCommandHandler<SubCategoryEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SubCategoryEntityService.name)
  }
}

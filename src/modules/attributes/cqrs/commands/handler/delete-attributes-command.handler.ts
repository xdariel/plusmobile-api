import { CommandHandler } from '@nestjs/cqrs';
import { DeleteAttributesCommand } from '../impl/delete-attributes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@CommandHandler(DeleteAttributesCommand)
export class DeleteAttributesCommandHandler extends DeleteCommandHandler<AttributesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AttributesEntityService.name)
  }
}

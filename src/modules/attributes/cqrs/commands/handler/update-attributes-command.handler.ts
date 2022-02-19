import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAttributesCommand } from '../impl/update-attributes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { AttributesEntityService } from '../../../services/attributes-entity.service';
import { AttributesEntity } from '../../../entities/attributes.entity';

@CommandHandler(UpdateAttributesCommand)
export class UpdateAttributesCommandHandler extends UpdateCommandHandler<AttributesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AttributesEntityService.name)
  }

}

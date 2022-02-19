import { CommandHandler } from '@nestjs/cqrs';

import { CreateAttributesCommand } from '../impl/create-attributes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@CommandHandler(CreateAttributesCommand)
export class CreateAttributesCommandHandler extends CreateCommandHandler<AttributesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AttributesEntityService.name);
  }

}

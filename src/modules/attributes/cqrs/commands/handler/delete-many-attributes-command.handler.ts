import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyAttributesCommand } from '../impl/delete-many-attributes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { AttributesEntityService } from '../../../services/attributes-entity.service';

@CommandHandler(DeleteManyAttributesCommand)
export class DeleteManyAttributesCommandHandler extends DeleteManyCommandHandler<AttributesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AttributesEntityService.name)
  }

}

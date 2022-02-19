import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFaqCommand } from '../impl/delete-many-faq.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@CommandHandler(DeleteManyFaqCommand)
export class DeleteManyFaqCommandHandler extends DeleteManyCommandHandler<FaqEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FaqEntityService.name)
  }

}

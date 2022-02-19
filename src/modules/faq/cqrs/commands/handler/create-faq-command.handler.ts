import { CommandHandler } from '@nestjs/cqrs';

import { CreateFaqCommand } from '../impl/create-faq.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@CommandHandler(CreateFaqCommand)
export class CreateFaqCommandHandler extends CreateCommandHandler<FaqEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FaqEntityService.name);
  }

}

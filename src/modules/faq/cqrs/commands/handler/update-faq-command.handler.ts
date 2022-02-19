import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFaqCommand } from '../impl/update-faq.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FaqEntityService } from '../../../services/faq-entity.service';
import { FaqEntity } from '../../../entities/faq.entity';

@CommandHandler(UpdateFaqCommand)
export class UpdateFaqCommandHandler extends UpdateCommandHandler<FaqEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FaqEntityService.name)
  }

}

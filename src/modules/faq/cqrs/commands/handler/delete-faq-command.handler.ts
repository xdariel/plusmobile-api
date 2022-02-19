import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFaqCommand } from '../impl/delete-faq.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FaqEntity } from '../../../entities/faq.entity';
import { FaqEntityService } from '../../../services/faq-entity.service';

@CommandHandler(DeleteFaqCommand)
export class DeleteFaqCommandHandler extends DeleteCommandHandler<FaqEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FaqEntityService.name)
  }
}

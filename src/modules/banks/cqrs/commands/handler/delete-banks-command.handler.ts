import { CommandHandler } from '@nestjs/cqrs';
import { DeleteBanksCommand } from '../impl/delete-banks.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@CommandHandler(DeleteBanksCommand)
export class DeleteBanksCommandHandler extends DeleteCommandHandler<BanksEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, BanksEntityService.name)
  }
}

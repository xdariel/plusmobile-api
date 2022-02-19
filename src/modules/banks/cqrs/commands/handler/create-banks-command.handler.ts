import { CommandHandler } from '@nestjs/cqrs';

import { CreateBanksCommand } from '../impl/create-banks.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@CommandHandler(CreateBanksCommand)
export class CreateBanksCommandHandler extends CreateCommandHandler<BanksEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, BanksEntityService.name);
  }

}

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyBanksCommand } from '../impl/delete-many-banks.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { BanksEntity } from '../../../entities/banks.entity';
import { BanksEntityService } from '../../../services/banks-entity.service';

@CommandHandler(DeleteManyBanksCommand)
export class DeleteManyBanksCommandHandler extends DeleteManyCommandHandler<BanksEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, BanksEntityService.name)
  }

}

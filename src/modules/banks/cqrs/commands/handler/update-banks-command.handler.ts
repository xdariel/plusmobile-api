import { CommandHandler } from '@nestjs/cqrs';
import { UpdateBanksCommand } from '../impl/update-banks.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { BanksEntityService } from '../../../services/banks-entity.service';
import { BanksEntity } from '../../../entities/banks.entity';

@CommandHandler(UpdateBanksCommand)
export class UpdateBanksCommandHandler extends UpdateCommandHandler<BanksEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, BanksEntityService.name)
  }

}

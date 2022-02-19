import { CommandHandler } from '@nestjs/cqrs';
import { UpdateStoreCommand } from '../impl/update-store.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { StoreEntityService } from '../../../services/store-entity.service';
import { StoreEntity } from '../../../entities/store.entity';

@CommandHandler(UpdateStoreCommand)
export class UpdateStoreCommandHandler extends UpdateCommandHandler<StoreEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, StoreEntityService.name)
  }

}

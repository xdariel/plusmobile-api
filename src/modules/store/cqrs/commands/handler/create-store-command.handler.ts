import { CommandHandler } from '@nestjs/cqrs';

import { CreateStoreCommand } from '../impl/create-store.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@CommandHandler(CreateStoreCommand)
export class CreateStoreCommandHandler extends CreateCommandHandler<StoreEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, StoreEntityService.name);
  }

}

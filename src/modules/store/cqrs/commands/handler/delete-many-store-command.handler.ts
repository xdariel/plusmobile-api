import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyStoreCommand } from '../impl/delete-many-store.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@CommandHandler(DeleteManyStoreCommand)
export class DeleteManyStoreCommandHandler extends DeleteManyCommandHandler<StoreEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, StoreEntityService.name)
  }

}

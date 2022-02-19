import { CommandHandler } from '@nestjs/cqrs';
import { DeleteStoreCommand } from '../impl/delete-store.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { StoreEntity } from '../../../entities/store.entity';
import { StoreEntityService } from '../../../services/store-entity.service';

@CommandHandler(DeleteStoreCommand)
export class DeleteStoreCommandHandler extends DeleteCommandHandler<StoreEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, StoreEntityService.name)
  }
}

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyVendorsCommand } from '../impl/delete-many-vendors.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@CommandHandler(DeleteManyVendorsCommand)
export class DeleteManyVendorsCommandHandler extends DeleteManyCommandHandler<VendorsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, VendorsEntityService.name)
  }

}

import { CommandHandler } from '@nestjs/cqrs';

import { CreateVendorsCommand } from '../impl/create-vendors.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@CommandHandler(CreateVendorsCommand)
export class CreateVendorsCommandHandler extends CreateCommandHandler<VendorsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, VendorsEntityService.name);
  }

}

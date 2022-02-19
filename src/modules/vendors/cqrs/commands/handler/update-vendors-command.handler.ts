import { CommandHandler } from '@nestjs/cqrs';
import { UpdateVendorsCommand } from '../impl/update-vendors.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { VendorsEntityService } from '../../../services/vendors-entity.service';
import { VendorsEntity } from '../../../entities/vendors.entity';

@CommandHandler(UpdateVendorsCommand)
export class UpdateVendorsCommandHandler extends UpdateCommandHandler<VendorsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, VendorsEntityService.name)
  }

}

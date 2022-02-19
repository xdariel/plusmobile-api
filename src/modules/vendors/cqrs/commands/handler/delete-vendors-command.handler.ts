import { CommandHandler } from '@nestjs/cqrs';
import { DeleteVendorsCommand } from '../impl/delete-vendors.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { VendorsEntityService } from '../../../services/vendors-entity.service';

@CommandHandler(DeleteVendorsCommand)
export class DeleteVendorsCommandHandler extends DeleteCommandHandler<VendorsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, VendorsEntityService.name)
  }
}

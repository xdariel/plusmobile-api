import { CommandHandler } from '@nestjs/cqrs';
import { DeleteTaxesCommand } from '../impl/delete-taxes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@CommandHandler(DeleteTaxesCommand)
export class DeleteTaxesCommandHandler extends DeleteCommandHandler<TaxesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TaxesEntityService.name)
  }
}

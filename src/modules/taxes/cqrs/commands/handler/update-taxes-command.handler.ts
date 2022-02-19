import { CommandHandler } from '@nestjs/cqrs';
import { UpdateTaxesCommand } from '../impl/update-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { TaxesEntityService } from '../../../services/taxes-entity.service';
import { TaxesEntity } from '../../../entities/taxes.entity';

@CommandHandler(UpdateTaxesCommand)
export class UpdateTaxesCommandHandler extends UpdateCommandHandler<TaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TaxesEntityService.name)
  }

}

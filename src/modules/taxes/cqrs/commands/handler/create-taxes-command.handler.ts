import { CommandHandler } from '@nestjs/cqrs';

import { CreateTaxesCommand } from '../impl/create-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@CommandHandler(CreateTaxesCommand)
export class CreateTaxesCommandHandler extends CreateCommandHandler<TaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, TaxesEntityService.name);
  }

}

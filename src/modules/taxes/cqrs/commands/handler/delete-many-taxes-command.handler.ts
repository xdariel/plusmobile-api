import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyTaxesCommand } from '../impl/delete-many-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { TaxesEntityService } from '../../../services/taxes-entity.service';

@CommandHandler(DeleteManyTaxesCommand)
export class DeleteManyTaxesCommandHandler extends DeleteManyCommandHandler<TaxesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, TaxesEntityService.name)
  }

}

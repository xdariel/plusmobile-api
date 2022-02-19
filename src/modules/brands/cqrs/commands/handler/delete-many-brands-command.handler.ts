import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyBrandsCommand } from '../impl/delete-many-brands.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@CommandHandler(DeleteManyBrandsCommand)
export class DeleteManyBrandsCommandHandler extends DeleteManyCommandHandler<BrandsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, BrandsEntityService.name)
  }

}

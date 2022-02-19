import { CommandHandler } from '@nestjs/cqrs';

import { CreateBrandsCommand } from '../impl/create-brands.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@CommandHandler(CreateBrandsCommand)
export class CreateBrandsCommandHandler extends CreateCommandHandler<BrandsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, BrandsEntityService.name);
  }

}

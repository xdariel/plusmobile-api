import { CommandHandler } from '@nestjs/cqrs';
import { UpdateBrandsCommand } from '../impl/update-brands.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { BrandsEntityService } from '../../../services/brands-entity.service';
import { BrandsEntity } from '../../../entities/brands.entity';

@CommandHandler(UpdateBrandsCommand)
export class UpdateBrandsCommandHandler extends UpdateCommandHandler<BrandsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, BrandsEntityService.name)
  }

}

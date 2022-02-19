import { CommandHandler } from '@nestjs/cqrs';
import { DeleteBrandsCommand } from '../impl/delete-brands.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { BrandsEntity } from '../../../entities/brands.entity';
import { BrandsEntityService } from '../../../services/brands-entity.service';

@CommandHandler(DeleteBrandsCommand)
export class DeleteBrandsCommandHandler extends DeleteCommandHandler<BrandsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, BrandsEntityService.name)
  }
}

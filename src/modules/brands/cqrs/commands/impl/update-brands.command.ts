import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { BrandsEntity } from '../../../entities/brands.entity';

export class UpdateBrandsCommand extends UpdateCommand<BrandsEntity> {
  constructor(public entityId: string, update: Partial<BrandsEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

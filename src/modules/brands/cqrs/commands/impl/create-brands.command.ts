import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { BrandsEntity } from '../../../entities/brands.entity';

export class CreateBrandsCommand extends CreateCommand<BrandsEntity> {
  constructor(public request: BrandsEntity, public connection?: unknown) {
    super(request, connection);
  }
}

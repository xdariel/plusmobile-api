import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';

export class UpdateSubCategoryCommand extends UpdateCommand<SubCategoryEntity> {
  constructor(public entityId: string, update: Partial<SubCategoryEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { CategoryEntity } from '../../../entities/category.entity';

export class UpdateCategoryCommand extends UpdateCommand<CategoryEntity> {
  constructor(public entityId: string, update: Partial<CategoryEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

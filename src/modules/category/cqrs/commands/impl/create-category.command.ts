import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { CategoryEntity } from '../../../entities/category.entity';

export class CreateCategoryCommand extends CreateCommand<CategoryEntity> {
  constructor(public request: CategoryEntity, public connection?: unknown) {
    super(request, connection);
  }
}

import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';

export class CreateSubCategoryCommand extends CreateCommand<SubCategoryEntity> {
  constructor(public request: SubCategoryEntity, public connection?: unknown) {
    super(request, connection);
  }
}

import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';

export class CreateFaqCategoryCommand extends CreateCommand<FaqCategoryEntity> {
  constructor(public request: FaqCategoryEntity, public connection?: unknown) {
    super(request, connection);
  }
}

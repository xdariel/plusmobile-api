import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';

export class UpdateFaqCategoryCommand extends UpdateCommand<FaqCategoryEntity> {
  constructor(public entityId: string, update: Partial<FaqCategoryEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

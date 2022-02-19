import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FaqEntity } from '../../../entities/faq.entity';

export class UpdateFaqCommand extends UpdateCommand<FaqEntity> {
  constructor(public entityId: string, update: Partial<FaqEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

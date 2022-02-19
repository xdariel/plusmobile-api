import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FaqEntity } from '../../../entities/faq.entity';

export class CreateFaqCommand extends CreateCommand<FaqEntity> {
  constructor(public request: FaqEntity, public connection?: unknown) {
    super(request, connection);
  }
}

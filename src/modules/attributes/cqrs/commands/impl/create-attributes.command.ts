import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { AttributesEntity } from '../../../entities/attributes.entity';

export class CreateAttributesCommand extends CreateCommand<AttributesEntity> {
  constructor(public request: AttributesEntity, public connection?: unknown) {
    super(request, connection);
  }
}

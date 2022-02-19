import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { AttributesEntity } from '../../../entities/attributes.entity';

export class UpdateAttributesCommand extends UpdateCommand<AttributesEntity> {
  constructor(public entityId: string, update: Partial<AttributesEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

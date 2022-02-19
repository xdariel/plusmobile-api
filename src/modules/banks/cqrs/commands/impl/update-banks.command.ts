import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { BanksEntity } from '../../../entities/banks.entity';

export class UpdateBanksCommand extends UpdateCommand<BanksEntity> {
  constructor(public entityId: string, update: Partial<BanksEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

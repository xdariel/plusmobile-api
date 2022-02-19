import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { BanksEntity } from '../../../entities/banks.entity';

export class CreateBanksCommand extends CreateCommand<BanksEntity> {
  constructor(public request: BanksEntity, public connection?: unknown) {
    super(request, connection);
  }
}

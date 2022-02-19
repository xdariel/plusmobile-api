import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { BanksEntity } from '../../../entities/banks.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyBanksCommand extends DeleteManyCommand<BanksEntity>{
  constructor(public request: GetOneDto<BanksEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

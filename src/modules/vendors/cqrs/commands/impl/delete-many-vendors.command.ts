import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyVendorsCommand extends DeleteManyCommand<VendorsEntity>{
  constructor(public request: GetOneDto<VendorsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

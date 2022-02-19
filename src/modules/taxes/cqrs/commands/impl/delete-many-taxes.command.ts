import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { TaxesEntity } from '../../../entities/taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyTaxesCommand extends DeleteManyCommand<TaxesEntity>{
  constructor(public request: GetOneDto<TaxesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyAttributesCommand extends DeleteManyCommand<AttributesEntity>{
  constructor(public request: GetOneDto<AttributesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

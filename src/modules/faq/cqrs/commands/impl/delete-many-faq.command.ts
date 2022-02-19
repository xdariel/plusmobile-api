import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FaqEntity } from '../../../entities/faq.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFaqCommand extends DeleteManyCommand<FaqEntity>{
  constructor(public request: GetOneDto<FaqEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFaqCategoryCommand extends DeleteManyCommand<FaqCategoryEntity>{
  constructor(public request: GetOneDto<FaqCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

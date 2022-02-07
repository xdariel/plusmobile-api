import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { CategoryEntity } from '../../../entities/category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyCategoryCommand extends DeleteManyCommand<CategoryEntity>{
  constructor(public request: GetOneDto<CategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

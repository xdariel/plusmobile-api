import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManySubCategoryCommand extends DeleteManyCommand<SubCategoryEntity>{
  constructor(public request: GetOneDto<SubCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

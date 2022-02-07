import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { CategoryEntity } from '../../../entities/category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneCategoryQuery extends GetOneQuery<CategoryEntity> {
  constructor(public request: GetOneDto<CategoryEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

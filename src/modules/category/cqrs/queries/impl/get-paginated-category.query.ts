import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { CategoryEntity } from '../../../entities/category.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedCategoryQuery extends GetPaginatedQuery<CategoryEntity>{
  constructor(public request: GetPaginatedDto<CategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

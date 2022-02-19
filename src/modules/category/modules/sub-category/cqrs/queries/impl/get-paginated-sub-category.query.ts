import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedSubCategoryQuery extends GetPaginatedQuery<SubCategoryEntity>{
  constructor(public request: GetPaginatedDto<SubCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

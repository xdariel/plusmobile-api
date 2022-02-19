import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFaqCategoryQuery extends GetPaginatedQuery<FaqCategoryEntity>{
  constructor(public request: GetPaginatedDto<FaqCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

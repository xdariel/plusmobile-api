import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { CategoryResponse } from './category.response';

@ObjectType()
export class PaginatedCategoryResponse extends PaginatedFindResultResponse(CategoryResponse) {
}


import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { SubCategoryResponse } from './sub-category.response';

@ObjectType()
export class PaginatedSubCategoryResponse extends PaginatedFindResultResponse(SubCategoryResponse) {
}


import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FaqCategoryResponse } from './faq-category.response';

@ObjectType()
export class PaginatedFaqCategoryResponse extends PaginatedFindResultResponse(FaqCategoryResponse) {
}


import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FaqResponse } from './faq.response';

@ObjectType()
export class PaginatedFaqResponse extends PaginatedFindResultResponse(FaqResponse) {
}


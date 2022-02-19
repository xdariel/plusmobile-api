import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { AttributesResponse } from './attributes.response';

@ObjectType()
export class PaginatedAttributesResponse extends PaginatedFindResultResponse(AttributesResponse) {
}


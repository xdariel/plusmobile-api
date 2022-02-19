import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { BrandsResponse } from './brands.response';

@ObjectType()
export class PaginatedBrandsResponse extends PaginatedFindResultResponse(BrandsResponse) {
}


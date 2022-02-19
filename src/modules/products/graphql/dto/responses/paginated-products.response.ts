import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { ProductsResponse } from './products.response';

@ObjectType()
export class PaginatedProductsResponse extends PaginatedFindResultResponse(ProductsResponse) {
}


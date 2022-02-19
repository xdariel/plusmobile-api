import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { VendorsResponse } from './vendors.response';

@ObjectType()
export class PaginatedVendorsResponse extends PaginatedFindResultResponse(VendorsResponse) {
}


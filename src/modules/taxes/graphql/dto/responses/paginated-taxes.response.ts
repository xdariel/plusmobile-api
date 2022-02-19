import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { TaxesResponse } from './taxes.response';

@ObjectType()
export class PaginatedTaxesResponse extends PaginatedFindResultResponse(TaxesResponse) {
}


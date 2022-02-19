import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { BanksResponse } from './banks.response';

@ObjectType()
export class PaginatedBanksResponse extends PaginatedFindResultResponse(BanksResponse) {
}


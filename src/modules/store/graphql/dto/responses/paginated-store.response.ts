import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { StoreResponse } from './store.response';

@ObjectType()
export class PaginatedStoreResponse extends PaginatedFindResultResponse(StoreResponse) {
}


import { ObjectType } from '@nestjs/graphql';
import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { UserPositionResponse } from './user-position.response';

@ObjectType()
export class PaginatedUserPositionResponse extends PaginatedFindResultResponse(UserPositionResponse) {
}


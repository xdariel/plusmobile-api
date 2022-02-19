import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { DiscountCouponResponse } from './discount-coupon.response';

@ObjectType()
export class PaginatedDiscountCouponResponse extends PaginatedFindResultResponse(DiscountCouponResponse) {
}


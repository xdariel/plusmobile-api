import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDiscountCouponQuery extends GetPaginatedQuery<DiscountCouponEntity>{
  constructor(public request: GetPaginatedDto<DiscountCouponEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

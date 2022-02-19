import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountDiscountCouponQuery extends CountQuery<DiscountCouponEntity>{
  constructor(public request: CountDto<DiscountCouponEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

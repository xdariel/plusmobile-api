import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDiscountCouponQuery extends GetAllQuery<DiscountCouponEntity>{
  constructor(public request: GetAllDto<DiscountCouponEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

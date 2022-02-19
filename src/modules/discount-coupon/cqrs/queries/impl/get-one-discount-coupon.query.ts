import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDiscountCouponQuery extends GetOneQuery<DiscountCouponEntity> {
  constructor(public request: GetOneDto<DiscountCouponEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

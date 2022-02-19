import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';

export class CreateDiscountCouponCommand extends CreateCommand<DiscountCouponEntity> {
  constructor(public request: DiscountCouponEntity, public connection?: unknown) {
    super(request, connection);
  }
}

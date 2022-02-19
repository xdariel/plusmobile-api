import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';

export class UpdateDiscountCouponCommand extends UpdateCommand<DiscountCouponEntity> {
  constructor(public entityId: string, update: Partial<DiscountCouponEntity>, public connection?: unknown) {
    super({ entityId, update }, connection);
  }
}

import { CreateDiscountCouponCommandHandler } from './handler/create-discount-coupon-command.handler';
import { DeleteDiscountCouponCommandHandler } from './handler/delete-discount-coupon-command.handler';
import { UpdateDiscountCouponCommandHandler } from './handler/update-discount-coupon-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDiscountCouponCommandHandler } from './handler/delete-many-discount-coupon-command.handler';

export const DiscountCouponCommandHandlers: Array<Provider> = [
  CreateDiscountCouponCommandHandler,
  DeleteDiscountCouponCommandHandler,
  UpdateDiscountCouponCommandHandler,
  DeleteManyDiscountCouponCommandHandler
];

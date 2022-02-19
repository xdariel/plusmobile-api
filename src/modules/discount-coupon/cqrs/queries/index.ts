import { GetAllDiscountCouponQueryHandler } from './handler/get-all-discount-coupon-query.handler';
import { GetPaginatedDiscountCouponQueryHandler } from './handler/get-paginated-discount-coupon-query.handler';
import { GetOneDiscountCouponQueryHandler } from './handler/get-one-discount-coupon-query.handler';
import { CountDiscountCouponQueryHandler } from './handler/count-discount-coupon-query.handler';
import { Provider } from '@nestjs/common';

export const DiscountCouponQueryHandlers: Array<Provider> = [
  GetAllDiscountCouponQueryHandler,
  GetPaginatedDiscountCouponQueryHandler,
  GetOneDiscountCouponQueryHandler,
  CountDiscountCouponQueryHandler
];

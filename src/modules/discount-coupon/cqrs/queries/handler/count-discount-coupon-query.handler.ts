import { QueryHandler } from '@nestjs/cqrs';
import { CountDiscountCouponQuery } from '../impl/count-discount-coupon.query';

import { ModuleRef } from '@nestjs/core';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountDiscountCouponQuery)
export class CountDiscountCouponQueryHandler extends CountQueryHandler<DiscountCouponEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiscountCouponEntityService.name)
  }

}

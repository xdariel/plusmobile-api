import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDiscountCouponQuery } from '../impl/get-all-discount-coupon.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@QueryHandler(GetAllDiscountCouponQuery)
export class GetAllDiscountCouponQueryHandler extends GetAllQueryHandler<DiscountCouponEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiscountCouponEntityService.name)
  }

}

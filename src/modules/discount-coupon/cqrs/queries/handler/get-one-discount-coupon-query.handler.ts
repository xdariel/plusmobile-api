import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDiscountCouponQuery } from '../impl/get-one-discount-coupon.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@QueryHandler(GetOneDiscountCouponQuery)
export class GetOneDiscountCouponQueryHandler extends GetOneQueryHandler<DiscountCouponEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiscountCouponEntityService.name)
  }
}


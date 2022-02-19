import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDiscountCouponQuery } from '../impl/get-paginated-discount-coupon.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@QueryHandler(GetPaginatedDiscountCouponQuery)
export class GetPaginatedDiscountCouponQueryHandler extends GetPaginatedQueryHandler<DiscountCouponEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiscountCouponEntityService.name)
  }

}

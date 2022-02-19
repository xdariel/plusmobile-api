import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DiscountCouponEntity } from '../entities/discount-coupon.entity';

@Injectable()
export class DiscountCouponRepository extends BaseRepository<DiscountCouponEntity, FilterableFieldsType<DiscountCouponEntity>> {
  constructor(
    @Inject(DiscountCouponEntity.name) private readonly _discountCouponModel: Model<DiscountCouponEntity>,
  ) {
    super(_discountCouponModel, DiscountCouponRepository.name);
  }
}

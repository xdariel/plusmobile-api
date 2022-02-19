import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { DiscountCouponEntity } from '../entities/discount-coupon.entity';
import { DiscountCouponRepository } from '../repositories/discount-coupon.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { DiscountCouponErrors } from '../errors/discount-coupon.errors';


@Injectable()
export class DiscountCouponEntityService extends BaseEntityService<DiscountCouponEntity> {
  constructor(private readonly _discountCouponRepo: DiscountCouponRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_discountCouponRepo, DiscountCouponEntity.name, dbUser);
  }

  async create(entity: DiscountCouponEntity): Promise<Result<void>> {

    try {
      if (entity.percentageDiscount !=null && entity.percentageDiscount>100) {
        return Result.Fail(new DiscountCouponErrors.PercentageInvalid('percentageDiscount', entity.percentageDiscount.toString()));
      }
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new DiscountCouponErrors.DiscountCouponFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}

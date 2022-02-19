import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDiscountCouponCommand } from '../impl/update-discount-coupon.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';

@CommandHandler(UpdateDiscountCouponCommand)
export class UpdateDiscountCouponCommandHandler extends UpdateCommandHandler<DiscountCouponEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiscountCouponEntityService.name)
  }

}

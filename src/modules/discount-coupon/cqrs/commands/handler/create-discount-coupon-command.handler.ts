import { CommandHandler } from '@nestjs/cqrs';

import { CreateDiscountCouponCommand } from '../impl/create-discount-coupon.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@CommandHandler(CreateDiscountCouponCommand)
export class CreateDiscountCouponCommandHandler extends CreateCommandHandler<DiscountCouponEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiscountCouponEntityService.name);
  }

}

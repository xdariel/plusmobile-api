import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDiscountCouponCommand } from '../impl/delete-discount-coupon.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@CommandHandler(DeleteDiscountCouponCommand)
export class DeleteDiscountCouponCommandHandler extends DeleteCommandHandler<DiscountCouponEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiscountCouponEntityService.name)
  }
}

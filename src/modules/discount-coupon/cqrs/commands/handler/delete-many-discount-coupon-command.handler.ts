import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDiscountCouponCommand } from '../impl/delete-many-discount-coupon.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { DiscountCouponEntityService } from '../../../services/discount-coupon-entity.service';

@CommandHandler(DeleteManyDiscountCouponCommand)
export class DeleteManyDiscountCouponCommandHandler extends DeleteManyCommandHandler<DiscountCouponEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiscountCouponEntityService.name)
  }

}

import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DiscountCouponEntity } from '../../../entities/discount-coupon.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDiscountCouponCommand extends DeleteManyCommand<DiscountCouponEntity>{
  constructor(public request: GetOneDto<DiscountCouponEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

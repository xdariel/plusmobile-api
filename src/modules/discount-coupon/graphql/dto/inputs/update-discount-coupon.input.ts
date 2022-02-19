import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDiscountCouponInput } from './create-discount-coupon.input';


@InputType()
export class PartialDiscountCouponInput extends PartialType(CreateDiscountCouponInput) {}

@InputType()
export class UpdateDiscountCouponInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDiscountCouponInput)  update: PartialDiscountCouponInput;

}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDiscountCouponInput {
  @Field(() => ID, )  entityId: string;
}

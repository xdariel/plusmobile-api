import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDiscountCouponInput } from './order-by-discount-coupon.input';
import { DiscountCouponFilter, DiscountCouponFilterInput } from './discount-coupon-filter.input';

@InputType()
export class GetAllDiscountCouponInput {
  @Field(() => DiscountCouponFilterInput, {nullable: true} )  where?: Filter<DiscountCouponFilter>;
  @Field(() => OrderByDiscountCouponInput, {nullable: true} )  orderBy?: OrderByDiscountCouponInput;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { DiscountCouponFilter, DiscountCouponFilterInput } from './discount-coupon-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDiscountCouponInput {
  @Field(() => DiscountCouponFilterInput, {nullable: true} )  where?: Filter<DiscountCouponFilter>;
}

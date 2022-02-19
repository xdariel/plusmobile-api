import { Field, InputType } from '@nestjs/graphql';
import { DiscountCouponFilter,DiscountCouponFilterInput } from './discount-coupon-filter.input';
import { OrderByDiscountCouponInput } from './order-by-discount-coupon.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDiscountCouponInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DiscountCouponFilterInput, {nullable: true} )  where?: Filter<DiscountCouponFilter>;
  @Field(() => OrderByDiscountCouponInput, {nullable: true} )  orderBy?: OrderByDiscountCouponInput;
}

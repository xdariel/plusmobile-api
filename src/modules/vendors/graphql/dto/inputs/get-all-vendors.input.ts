import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByVendorsInput } from './order-by-vendors.input';
import { VendorsFilter, VendorsFilterInput } from './vendors-filter.input';

@InputType()
export class GetAllVendorsInput {
  @Field(() => VendorsFilterInput, {nullable: true} )  where?: Filter<VendorsFilter>;
  @Field(() => OrderByVendorsInput, {nullable: true} )  orderBy?: OrderByVendorsInput;
}

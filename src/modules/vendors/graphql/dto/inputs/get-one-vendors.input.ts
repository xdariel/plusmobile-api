import { Field, InputType } from '@nestjs/graphql';
import { VendorsFilter, VendorsFilterInput } from './vendors-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneVendorsInput {
  @Field(() => VendorsFilterInput, {nullable: true} )  where?: Filter<VendorsFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { VendorsFilter, VendorsFilterInput } from './vendors-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyVendorsInput {
  @Field(() => VendorsFilterInput, {nullable: true} )  where?: Filter<VendorsFilter>;
}

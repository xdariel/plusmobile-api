import { Field, InputType, ID } from '@nestjs/graphql';
import { TaxesFilter, TaxesFilterInput } from './taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyTaxesInput {
  @Field(() => TaxesFilterInput, {nullable: true} )  where?: Filter<TaxesFilter>;
}

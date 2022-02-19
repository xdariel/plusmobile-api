import { Field, InputType } from '@nestjs/graphql';
import { TaxesFilter, TaxesFilterInput } from './taxes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneTaxesInput {
  @Field(() => TaxesFilterInput, {nullable: true} )  where?: Filter<TaxesFilter>;
}

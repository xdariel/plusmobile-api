import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByTaxesInput } from './order-by-taxes.input';
import { TaxesFilter, TaxesFilterInput } from './taxes-filter.input';

@InputType()
export class GetAllTaxesInput {
  @Field(() => TaxesFilterInput, {nullable: true} )  where?: Filter<TaxesFilter>;
  @Field(() => OrderByTaxesInput, {nullable: true} )  orderBy?: OrderByTaxesInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { ProductsFilter, ProductsFilterInput } from './products-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneProductsInput {
  @Field(() => ProductsFilterInput, {nullable: true} )  where?: Filter<ProductsFilter>;
}

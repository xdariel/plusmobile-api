import { Field, InputType, ID } from '@nestjs/graphql';
import { ProductsFilter, ProductsFilterInput } from './products-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyProductsInput {
  @Field(() => ProductsFilterInput, {nullable: true} )  where?: Filter<ProductsFilter>;
}

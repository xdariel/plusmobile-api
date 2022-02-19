import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByProductsInput } from './order-by-products.input';
import { ProductsFilter, ProductsFilterInput } from './products-filter.input';

@InputType()
export class GetAllProductsInput {
  @Field(() => ProductsFilterInput, {nullable: true} )  where?: Filter<ProductsFilter>;
  @Field(() => OrderByProductsInput, {nullable: true} )  orderBy?: OrderByProductsInput;
}

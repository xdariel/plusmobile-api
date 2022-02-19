import { Field, InputType } from '@nestjs/graphql';
import { ProductsFilter,ProductsFilterInput } from './products-filter.input';
import { OrderByProductsInput } from './order-by-products.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedProductsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ProductsFilterInput, {nullable: true} )  where?: Filter<ProductsFilter>;
  @Field(() => OrderByProductsInput, {nullable: true} )  orderBy?: OrderByProductsInput;
}

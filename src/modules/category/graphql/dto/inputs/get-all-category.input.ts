import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByCategoryInput } from './order-by-category.input';
import { CategoryFilter, CategoryFilterInput } from './category-filter.input';

@InputType()
export class GetAllCategoryInput {
  @Field(() => CategoryFilterInput, {nullable: true} )  where?: Filter<CategoryFilter>;
  @Field(() => OrderByCategoryInput, {nullable: true} )  orderBy?: OrderByCategoryInput;
}

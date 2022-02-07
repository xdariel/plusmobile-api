import { Field, InputType, ID } from '@nestjs/graphql';
import { CategoryFilter, CategoryFilterInput } from './category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyCategoryInput {
  @Field(() => CategoryFilterInput, {nullable: true} )  where?: Filter<CategoryFilter>;
}

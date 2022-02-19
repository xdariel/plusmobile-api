import { Field, InputType } from '@nestjs/graphql';
import { SubCategoryFilter, SubCategoryFilterInput } from './sub-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneSubCategoryInput {
  @Field(() => SubCategoryFilterInput, {nullable: true} )  where?: Filter<SubCategoryFilter>;
}

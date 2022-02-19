import { Field, InputType, ID } from '@nestjs/graphql';
import { SubCategoryFilter, SubCategoryFilterInput } from './sub-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManySubCategoryInput {
  @Field(() => SubCategoryFilterInput, {nullable: true} )  where?: Filter<SubCategoryFilter>;
}

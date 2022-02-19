import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderBySubCategoryInput } from './order-by-sub-category.input';
import { SubCategoryFilter, SubCategoryFilterInput } from './sub-category-filter.input';

@InputType()
export class GetAllSubCategoryInput {
  @Field(() => SubCategoryFilterInput, {nullable: true} )  where?: Filter<SubCategoryFilter>;
  @Field(() => OrderBySubCategoryInput, {nullable: true} )  orderBy?: OrderBySubCategoryInput;
}

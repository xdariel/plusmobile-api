import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFaqCategoryInput } from './order-by-faq-category.input';
import { FaqCategoryFilter, FaqCategoryFilterInput } from './faq-category-filter.input';

@InputType()
export class GetAllFaqCategoryInput {
  @Field(() => FaqCategoryFilterInput, {nullable: true} )  where?: Filter<FaqCategoryFilter>;
  @Field(() => OrderByFaqCategoryInput, {nullable: true} )  orderBy?: OrderByFaqCategoryInput;
}

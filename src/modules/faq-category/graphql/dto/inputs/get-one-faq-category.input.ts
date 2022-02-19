import { Field, InputType } from '@nestjs/graphql';
import { FaqCategoryFilter, FaqCategoryFilterInput } from './faq-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFaqCategoryInput {
  @Field(() => FaqCategoryFilterInput, {nullable: true} )  where?: Filter<FaqCategoryFilter>;
}

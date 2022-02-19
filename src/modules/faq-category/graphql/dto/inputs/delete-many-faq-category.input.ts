import { Field, InputType, ID } from '@nestjs/graphql';
import { FaqCategoryFilter, FaqCategoryFilterInput } from './faq-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFaqCategoryInput {
  @Field(() => FaqCategoryFilterInput, {nullable: true} )  where?: Filter<FaqCategoryFilter>;
}

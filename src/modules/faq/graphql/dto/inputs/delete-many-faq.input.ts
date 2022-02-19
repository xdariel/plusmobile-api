import { Field, InputType, ID } from '@nestjs/graphql';
import { FaqFilter, FaqFilterInput } from './faq-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFaqInput {
  @Field(() => FaqFilterInput, {nullable: true} )  where?: Filter<FaqFilter>;
}

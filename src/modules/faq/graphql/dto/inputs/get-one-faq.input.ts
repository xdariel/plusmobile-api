import { Field, InputType } from '@nestjs/graphql';
import { FaqFilter, FaqFilterInput } from './faq-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFaqInput {
  @Field(() => FaqFilterInput, {nullable: true} )  where?: Filter<FaqFilter>;
}

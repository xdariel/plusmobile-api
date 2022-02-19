import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFaqInput } from './order-by-faq.input';
import { FaqFilter, FaqFilterInput } from './faq-filter.input';

@InputType()
export class GetAllFaqInput {
  @Field(() => FaqFilterInput, {nullable: true} )  where?: Filter<FaqFilter>;
  @Field(() => OrderByFaqInput, {nullable: true} )  orderBy?: OrderByFaqInput;
}

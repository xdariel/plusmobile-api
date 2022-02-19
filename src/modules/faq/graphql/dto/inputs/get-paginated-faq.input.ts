import { Field, InputType } from '@nestjs/graphql';
import { FaqFilter,FaqFilterInput } from './faq-filter.input';
import { OrderByFaqInput } from './order-by-faq.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFaqInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FaqFilterInput, {nullable: true} )  where?: Filter<FaqFilter>;
  @Field(() => OrderByFaqInput, {nullable: true} )  orderBy?: OrderByFaqInput;
}

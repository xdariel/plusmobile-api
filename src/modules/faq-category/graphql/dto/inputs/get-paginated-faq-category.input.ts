import { Field, InputType } from '@nestjs/graphql';
import { FaqCategoryFilter,FaqCategoryFilterInput } from './faq-category-filter.input';
import { OrderByFaqCategoryInput } from './order-by-faq-category.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFaqCategoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FaqCategoryFilterInput, {nullable: true} )  where?: Filter<FaqCategoryFilter>;
  @Field(() => OrderByFaqCategoryInput, {nullable: true} )  orderBy?: OrderByFaqCategoryInput;
}

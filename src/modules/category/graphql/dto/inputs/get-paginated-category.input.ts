import { Field, InputType } from '@nestjs/graphql';
import { CategoryFilter,CategoryFilterInput } from './category-filter.input';
import { OrderByCategoryInput } from './order-by-category.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedCategoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => CategoryFilterInput, {nullable: true} )  where?: Filter<CategoryFilter>;
  @Field(() => OrderByCategoryInput, {nullable: true} )  orderBy?: OrderByCategoryInput;
}

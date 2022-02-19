import { Field, InputType } from '@nestjs/graphql';
import { SubCategoryFilter,SubCategoryFilterInput } from './sub-category-filter.input';
import { OrderBySubCategoryInput } from './order-by-sub-category.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedSubCategoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => SubCategoryFilterInput, {nullable: true} )  where?: Filter<SubCategoryFilter>;
  @Field(() => OrderBySubCategoryInput, {nullable: true} )  orderBy?: OrderBySubCategoryInput;
}

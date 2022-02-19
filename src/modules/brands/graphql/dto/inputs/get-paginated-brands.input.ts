import { Field, InputType } from '@nestjs/graphql';
import { BrandsFilter,BrandsFilterInput } from './brands-filter.input';
import { OrderByBrandsInput } from './order-by-brands.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedBrandsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => BrandsFilterInput, {nullable: true} )  where?: Filter<BrandsFilter>;
  @Field(() => OrderByBrandsInput, {nullable: true} )  orderBy?: OrderByBrandsInput;
}

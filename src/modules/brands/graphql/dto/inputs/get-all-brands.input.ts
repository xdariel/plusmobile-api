import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByBrandsInput } from './order-by-brands.input';
import { BrandsFilter, BrandsFilterInput } from './brands-filter.input';

@InputType()
export class GetAllBrandsInput {
  @Field(() => BrandsFilterInput, {nullable: true} )  where?: Filter<BrandsFilter>;
  @Field(() => OrderByBrandsInput, {nullable: true} )  orderBy?: OrderByBrandsInput;
}

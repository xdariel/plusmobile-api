import { Field, InputType } from '@nestjs/graphql';
import { BrandsFilter, BrandsFilterInput } from './brands-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneBrandsInput {
  @Field(() => BrandsFilterInput, {nullable: true} )  where?: Filter<BrandsFilter>;
}

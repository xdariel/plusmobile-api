import { Field, InputType, ID } from '@nestjs/graphql';
import { BrandsFilter, BrandsFilterInput } from './brands-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyBrandsInput {
  @Field(() => BrandsFilterInput, {nullable: true} )  where?: Filter<BrandsFilter>;
}

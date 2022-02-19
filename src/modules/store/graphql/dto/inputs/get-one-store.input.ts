import { Field, InputType } from '@nestjs/graphql';
import { StoreFilter, StoreFilterInput } from './store-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneStoreInput {
  @Field(() => StoreFilterInput, {nullable: true} )  where?: Filter<StoreFilter>;
}

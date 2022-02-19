import { Field, InputType, ID } from '@nestjs/graphql';
import { StoreFilter, StoreFilterInput } from './store-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyStoreInput {
  @Field(() => StoreFilterInput, {nullable: true} )  where?: Filter<StoreFilter>;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByStoreInput } from './order-by-store.input';
import { StoreFilter, StoreFilterInput } from './store-filter.input';

@InputType()
export class GetAllStoreInput {
  @Field(() => StoreFilterInput, {nullable: true} )  where?: Filter<StoreFilter>;
  @Field(() => OrderByStoreInput, {nullable: true} )  orderBy?: OrderByStoreInput;
}

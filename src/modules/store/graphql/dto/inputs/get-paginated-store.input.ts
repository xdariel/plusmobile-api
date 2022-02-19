import { Field, InputType } from '@nestjs/graphql';
import { StoreFilter,StoreFilterInput } from './store-filter.input';
import { OrderByStoreInput } from './order-by-store.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedStoreInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => StoreFilterInput, {nullable: true} )  where?: Filter<StoreFilter>;
  @Field(() => OrderByStoreInput, {nullable: true} )  orderBy?: OrderByStoreInput;
}

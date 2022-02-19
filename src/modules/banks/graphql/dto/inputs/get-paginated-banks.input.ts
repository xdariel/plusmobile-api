import { Field, InputType } from '@nestjs/graphql';
import { BanksFilter,BanksFilterInput } from './banks-filter.input';
import { OrderByBanksInput } from './order-by-banks.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedBanksInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => BanksFilterInput, {nullable: true} )  where?: Filter<BanksFilter>;
  @Field(() => OrderByBanksInput, {nullable: true} )  orderBy?: OrderByBanksInput;
}

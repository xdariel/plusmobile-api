import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByBanksInput } from './order-by-banks.input';
import { BanksFilter, BanksFilterInput } from './banks-filter.input';

@InputType()
export class GetAllBanksInput {
  @Field(() => BanksFilterInput, {nullable: true} )  where?: Filter<BanksFilter>;
  @Field(() => OrderByBanksInput, {nullable: true} )  orderBy?: OrderByBanksInput;
}

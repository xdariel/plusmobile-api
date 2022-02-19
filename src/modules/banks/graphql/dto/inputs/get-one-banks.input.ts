import { Field, InputType } from '@nestjs/graphql';
import { BanksFilter, BanksFilterInput } from './banks-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneBanksInput {
  @Field(() => BanksFilterInput, {nullable: true} )  where?: Filter<BanksFilter>;
}

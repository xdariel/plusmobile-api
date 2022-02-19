import { Field, InputType } from '@nestjs/graphql';
import { TaxesFilter,TaxesFilterInput } from './taxes-filter.input';
import { OrderByTaxesInput } from './order-by-taxes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedTaxesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => TaxesFilterInput, {nullable: true} )  where?: Filter<TaxesFilter>;
  @Field(() => OrderByTaxesInput, {nullable: true} )  orderBy?: OrderByTaxesInput;
}

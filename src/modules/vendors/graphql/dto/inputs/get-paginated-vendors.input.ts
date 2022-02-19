import { Field, InputType } from '@nestjs/graphql';
import { VendorsFilter,VendorsFilterInput } from './vendors-filter.input';
import { OrderByVendorsInput } from './order-by-vendors.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedVendorsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => VendorsFilterInput, {nullable: true} )  where?: Filter<VendorsFilter>;
  @Field(() => OrderByVendorsInput, {nullable: true} )  orderBy?: OrderByVendorsInput;
}

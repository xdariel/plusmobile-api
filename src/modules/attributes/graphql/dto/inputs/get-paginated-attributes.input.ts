import { Field, InputType } from '@nestjs/graphql';
import { AttributesFilter,AttributesFilterInput } from './attributes-filter.input';
import { OrderByAttributesInput } from './order-by-attributes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedAttributesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => AttributesFilterInput, {nullable: true} )  where?: Filter<AttributesFilter>;
  @Field(() => OrderByAttributesInput, {nullable: true} )  orderBy?: OrderByAttributesInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByAttributesInput } from './order-by-attributes.input';
import { AttributesFilter, AttributesFilterInput } from './attributes-filter.input';

@InputType()
export class GetAllAttributesInput {
  @Field(() => AttributesFilterInput, {nullable: true} )  where?: Filter<AttributesFilter>;
  @Field(() => OrderByAttributesInput, {nullable: true} )  orderBy?: OrderByAttributesInput;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { AttributesFilter, AttributesFilterInput } from './attributes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyAttributesInput {
  @Field(() => AttributesFilterInput, {nullable: true} )  where?: Filter<AttributesFilter>;
}

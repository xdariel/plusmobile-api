import { Field, InputType } from '@nestjs/graphql';
import { AttributesFilter, AttributesFilterInput } from './attributes-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneAttributesInput {
  @Field(() => AttributesFilterInput, {nullable: true} )  where?: Filter<AttributesFilter>;
}

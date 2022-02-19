import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateAttributesInput {
  @Field(() => ID, {nullable: true}) image?: string;
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  color?: string;
  @Field(() => String, {nullable: true} )  slug?: string;
  @Field(() => String, {nullable: true} )  listName?: string;
  @Field(() => String, {nullable: true} )  listSlug?: string;
}

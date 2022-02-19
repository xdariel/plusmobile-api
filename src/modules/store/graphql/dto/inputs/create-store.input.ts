import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field(() => String, )  name: string;
  @Field(() => String, )  email: string;
  @Field(() => String, )  phone: string;
  @Field(() => String, )  address: string;
  @Field(() => String, )  country: string;
  @Field(() => String, )  city: string;
  @Field(() => ID, {nullable: true}) vendors: string;
  @Field(() => Boolean, {nullable: true} )  isActive?: boolean;
  @Field(() => Boolean, {nullable: true} )  isRoot?: boolean;
  @Field(() => String, )  description?: string;
  @Field(() => ID, {nullable: true}) logo?: string;
}

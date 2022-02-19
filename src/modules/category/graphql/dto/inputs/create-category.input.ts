import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => ID, {nullable: true}) banner?: string;
  @Field(() => Int, )  order: number;
  @Field(() => Boolean, )  isActive: boolean;
  @Field(() => String, )  icon: string;
}

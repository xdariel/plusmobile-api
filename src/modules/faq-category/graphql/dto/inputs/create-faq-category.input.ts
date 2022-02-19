import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFaqCategoryInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, )  isActive: boolean;
}

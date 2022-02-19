import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFaqInput {
  @Field(() => ID, )  category: string;
  @Field(() => String, )  question: string;
  @Field(() => String, )  answer: string;
}

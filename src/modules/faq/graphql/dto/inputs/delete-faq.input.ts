import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFaqInput {
  @Field(() => ID, )  entityId: string;
}

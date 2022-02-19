import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteAttributesInput {
  @Field(() => ID, )  entityId: string;
}

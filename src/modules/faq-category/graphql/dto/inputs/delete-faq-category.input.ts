import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFaqCategoryInput {
  @Field(() => ID, )  entityId: string;
}

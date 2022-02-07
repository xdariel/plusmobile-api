import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCategoryInput {
  @Field(() => ID, )  entityId: string;
}

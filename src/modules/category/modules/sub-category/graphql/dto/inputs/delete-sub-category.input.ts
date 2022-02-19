import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteSubCategoryInput {
  @Field(() => ID, )  entityId: string;
}

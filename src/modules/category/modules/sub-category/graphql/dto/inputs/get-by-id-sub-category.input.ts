import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdSubCategoryInput {
  @Field(() => ID, )  entity__Id: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFaqCategoryInput {
  @Field(() => ID, )  entity__Id: string;
}

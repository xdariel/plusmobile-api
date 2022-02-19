import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdAttributesInput {
  @Field(() => ID, )  entity__Id: string;
}

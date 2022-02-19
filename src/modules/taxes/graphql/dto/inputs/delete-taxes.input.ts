import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteTaxesInput {
  @Field(() => ID, )  entityId: string;
}

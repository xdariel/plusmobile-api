import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteVendorsInput {
  @Field(() => ID, )  entityId: string;
}

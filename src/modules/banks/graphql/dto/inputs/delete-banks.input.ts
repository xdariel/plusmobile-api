import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteBanksInput {
  @Field(() => ID, )  entityId: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteSupportTicketInput {
  @Field(() => ID, )  entityId: string;
}

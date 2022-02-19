import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdSupportTicketInput {
  @Field(() => ID, )  entity__Id: string;
}

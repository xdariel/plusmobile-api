import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateSupportTicketInput } from './create-support-ticket.input';


@InputType()
export class PartialSupportTicketInput extends PartialType(CreateSupportTicketInput) {}

@InputType()
export class UpdateSupportTicketInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialSupportTicketInput)  update: PartialSupportTicketInput;

}

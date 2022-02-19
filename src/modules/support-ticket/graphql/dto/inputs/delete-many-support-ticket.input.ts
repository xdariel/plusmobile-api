import { Field, InputType, ID } from '@nestjs/graphql';
import { SupportTicketFilter, SupportTicketFilterInput } from './support-ticket-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManySupportTicketInput {
  @Field(() => SupportTicketFilterInput, {nullable: true} )  where?: Filter<SupportTicketFilter>;
}

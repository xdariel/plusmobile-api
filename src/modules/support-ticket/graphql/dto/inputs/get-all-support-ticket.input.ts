import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderBySupportTicketInput } from './order-by-support-ticket.input';
import { SupportTicketFilter, SupportTicketFilterInput } from './support-ticket-filter.input';

@InputType()
export class GetAllSupportTicketInput {
  @Field(() => SupportTicketFilterInput, {nullable: true} )  where?: Filter<SupportTicketFilter>;
  @Field(() => OrderBySupportTicketInput, {nullable: true} )  orderBy?: OrderBySupportTicketInput;
}

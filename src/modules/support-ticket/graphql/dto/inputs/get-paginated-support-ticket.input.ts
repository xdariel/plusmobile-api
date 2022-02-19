import { Field, InputType } from '@nestjs/graphql';
import { SupportTicketFilter,SupportTicketFilterInput } from './support-ticket-filter.input';
import { OrderBySupportTicketInput } from './order-by-support-ticket.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedSupportTicketInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => SupportTicketFilterInput, {nullable: true} )  where?: Filter<SupportTicketFilter>;
  @Field(() => OrderBySupportTicketInput, {nullable: true} )  orderBy?: OrderBySupportTicketInput;
}

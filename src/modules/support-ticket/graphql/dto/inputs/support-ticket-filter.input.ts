import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SupportTicketEntity } from '../../../entities/support-ticket.entity';

@ObjectType()
export class SupportTicketFilter implements IEntityFilter<SupportTicketEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const SupportTicketFilterInput = FilterType(SupportTicketFilter);
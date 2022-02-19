import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FaqEntity } from '../../../entities/faq.entity';

@ObjectType()
export class FaqFilter implements IEntityFilter<FaqEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) category?: string;
  @FilterableField(()=>String, { nullable: true}) question?: string;
  @FilterableField(()=>String, { nullable: true}) answer?: string;
  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FaqFilterInput = FilterType(FaqFilter);
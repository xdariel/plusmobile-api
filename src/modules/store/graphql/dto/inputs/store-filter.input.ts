import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { StoreEntity } from '../../../entities/store.entity';

@ObjectType()
export class StoreFilter implements IEntityFilter<StoreEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) email?: string;
  @FilterableField(()=>String, { nullable: true }) phone?: string;
  @FilterableField(()=>String, { nullable: true}) address?: string;
  @FilterableField(()=>String, { nullable: true }) country?: string;
  @FilterableField(()=>String, { nullable: true}) city?: string;
  @FilterableField(()=>String, { nullable: true }) vendors?: string;
  @FilterableField(()=>Boolean, { nullable: true}) isActive?: boolean;
  @FilterableField(()=>Boolean, { nullable: true }) isRoot?: boolean;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const StoreFilterInput = FilterType(StoreFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { VendorsEntity } from '../../../entities/vendors.entity';

@ObjectType()
export class VendorsFilter implements IEntityFilter<VendorsEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const VendorsFilterInput = FilterType(VendorsFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, Int, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';

@ObjectType()
export class SubCategoryFilter implements IEntityFilter<SubCategoryEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>Int, { nullable: true}) order?: number;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const SubCategoryFilterInput = FilterType(SubCategoryFilter);
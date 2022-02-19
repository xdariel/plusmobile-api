import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AttributesEntity } from '../../../entities/attributes.entity';

@ObjectType()
export class AttributesFilter implements IEntityFilter<AttributesEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) color?: string;
  @FilterableField(()=>String, { nullable: true}) slug?: string;
  @FilterableField(()=>String, { nullable: true}) listName?: string;
  @FilterableField(()=>String, { nullable: true}) listSlug?: string;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const AttributesFilterInput = FilterType(AttributesFilter);
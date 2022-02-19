import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { Float, ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProductsEntity } from '../../../entities/products.entity';

@ObjectType()
export class ProductsFilter implements IEntityFilter<ProductsEntity>{
  @FilterableField(()=>ID, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) subCategory?: string;
  @FilterableField(()=>Boolean, { nullable: true}) isActive?: boolean;
  @FilterableField(()=>String, { nullable: true}) sku?: string;
  @FilterableField(()=>Float, { nullable: true }) price?: number;
  @FilterableField(()=>Float, { nullable: true }) salePrice?: number;
  @FilterableField(() => Float,{nullable:true} )  weight?: number;
  @FilterableField(() => Float,{nullable:true} )  length?: number;
  @FilterableField(() => Float,{nullable:true} )  board?: number;
  @FilterableField(() => Float,{nullable:true} )  width?: number;
  @FilterableField(()=>String, { nullable: true }) brand?: string;
  @FilterableField(()=>String, { nullable: true}) store?: string;
  @FilterableField(()=>String, { nullable: true }) tax?: string;
  @FilterableField(()=>String, { nullable: true}) tags?: string;
  @FilterableField(()=>Boolean, { nullable: true }) periodDiscount?: boolean;
  @FilterableField(()=>Date, { nullable: true}) periodDiscountFrom?: Date;
  @FilterableField(()=>Date, { nullable: true}) periodDiscountTo?: Date;
  @FilterableField(()=>Float, { nullable: true }) specialPrice?: number;
  @FilterableField(()=>String, { nullable: true}) description?: string;
  @FilterableField(()=>String, { nullable: true }) slug?: string;
  @FilterableField(()=>Float, { nullable: true }) distributionPercentage?: number;
  @FilterableField(()=>Float, { nullable: true }) utilityPercentage?: number;
  @FilterableField(()=>String, { nullable: true }) attributes?: string;
  @FilterableField(()=>String, { nullable: true }) relatedProducts?: string;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ProductsFilterInput = FilterType(ProductsFilter);
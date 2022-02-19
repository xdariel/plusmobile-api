import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { SubCategoryEntity } from 'src/modules/category/modules/sub-category/entities/sub-category.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { BrandsEntity } from 'src/modules/brands/entities/brands.entity';
import { StoreEntity } from 'src/modules/store/entities/store.entity';
import { TaxesEntity } from 'src/modules/taxes/entities/taxes.entity';


export enum StatusType {
  IN_STOCK='IN_STOCK',
  NO_STOCK='NO_STOCK',
  WAREHOUSE_MANAGEMENT='WAREHOUSE_MANAGEMENT'
}

@Schema({ ...SchemaConstants, collection: 'products' })
export class ProductsEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>SubCategoryEntity}) subCategory?: string;
  @Prop() isActive: boolean;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) photo?: string;
  @Prop() sku: string;
  @Prop() price: number;
  @Prop() salePrice: number;
  @Prop({type:String}) status: StatusType;
  @Prop() weight?: number;
  @Prop() length?: number;
  @Prop() board?: number;
  @Prop() width?: number;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>BrandsEntity}) brand?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>StoreEntity}) store?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>TaxesEntity}) tax?: string;
  @Prop() tags?: Array<string>;
  @Prop() periodDiscount: boolean;
  @Prop() periodDiscountFrom?: Date;
  @Prop() periodDiscountTo?: Date;
  @Prop() specialPrice?: number;
  @Prop() slug?: Array<string>;
  @Prop() distributionPercentage: number;
  @Prop() utilityPercentage: number;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) relatedProducts?: Array<string>;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) attributes?: Array<string>;
}

export const ProductsSchema = SchemaFactory.createForClass(ProductsEntity);

export const ProductsFeature = {
  name: ProductsEntity.name,
  schema: ProductsSchema,
};

import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ProductsEntity } from 'src/modules/products/entities/products.entity';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'discount-coupon' })
export class DiscountCouponEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() percentage: boolean;
  @Prop() unlimited: boolean;
  @Prop() expiration: boolean;
  @Prop() expirationDate: Date;
  @Prop() applicableProduct: boolean;
  @Prop() priceDiscount: number;
  @Prop() percentageDiscount: number;
  @Prop() isActive: boolean;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>ProductsEntity}) product?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>UserEntity}) client?: string;
}

export const DiscountCouponSchema = SchemaFactory.createForClass(DiscountCouponEntity);

export const DiscountCouponFeature = {
  name: DiscountCouponEntity.name,
  schema: DiscountCouponSchema,
};

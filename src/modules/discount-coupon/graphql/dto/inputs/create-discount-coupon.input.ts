import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateDiscountCouponInput {
  @Field(() => String, )  name: string;
  @Field(() => Boolean, {nullable: true} )  percentage: boolean;
  @Field(() => Boolean, {nullable: true} )  unlimited: boolean;
  @Field(() => Boolean, {nullable: true} )  expiration: boolean;
  @Field(() => Date, {nullable: true} )  expirationDate: Date;
  @Field(() => Boolean, {nullable: true} )  applicableProduct: boolean;
  @Field(() => Float, {nullable: true} )  priceDiscount: number;
  @Field(() => Float, {nullable: true} )  percentageDiscount: number;
  @Field(() => Boolean, {nullable: true} )  isActive: boolean;
  @Field(() => ID, {nullable: true}) product?: string;
  @Field(() => ID, {nullable: true}) client?: string;
}

import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class DiscountCouponResponse {
  @Field(() => ID) id: string;
  @Field(() => String, )  name: string;
  @Field(() => Boolean, {nullable: true} )  percentage: boolean;
  @Field(() => Boolean, {nullable: true} )  unlimited: boolean;
  @Field(() => Boolean, {nullable: true} )  expiration: boolean;
  @Field(() => Date, {nullable: true} )  expirationDate: Date;
  @Field(() => Boolean, {nullable: true} )  applicableProduct: boolean;
  @Field(() => SolvedEntityResponse, {nullable: true}) product?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, {nullable: true}) client?: SolvedEntityResponse;
  @Field(() => Float, {nullable: true} )  priceDiscount: number;
  @Field(() => Float, {nullable: true} )  percentageDiscount: number;
  @Field(() => Boolean, {nullable: true} )  isActive: boolean;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

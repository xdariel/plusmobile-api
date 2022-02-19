import { Field, InputType, ID, Float } from '@nestjs/graphql';
import { StatusType } from 'src/modules/products/entities/products.entity';
@InputType()
export class CreateProductsInput {
  @Field(() => String, )  name: string;
  @Field(() => ID, {nullable: true}) subCategory?: string;
  @Field(() => Boolean, )  isActive: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => ID, {nullable: true}) photo?: string;
  @Field(() => String )  sku: string;
  @Field(() => Float )  price: number;
  @Field(() => Float )  salePrice: number;
  @Field(() => StatusType, )  status: StatusType;
  @Field(() => Float,{nullable:true} )  weight?: number;
  @Field(() => Float,{nullable:true} )  length?: number;
  @Field(() => Float,{nullable:true} )  board?: number;
  @Field(() => Float,{nullable:true} )  width?: number;
  @Field(() => ID, {nullable: true}) brand?: string;
  @Field(() => ID, {nullable: true}) store?: string;
  @Field(() => ID, {nullable: true}) tax?: string;
  @Field(() => [String], {nullable: true}) tags?: Array<string>;
  @Field(() => Boolean,{nullable: true} )  periodDiscount: boolean;
  @Field(() => Date, {nullable: true} )  periodDiscountFrom?: Date;
  @Field(() => Date, {nullable: true} )  periodDiscountTo?: Date;
  @Field(() => Float,{nullable:true} )  specialPrice?: number;
  @Field(() => [String], {nullable: true}) slug?: Array<string>;
  @Field(() => Float)  distributionPercentage: number;
  @Field(() => Float)  utilityPercentage: number;
  @Field(() => [ID]) attributes?: Array<string>;
  @Field(() => [ID]) relatedProducts?: Array<string>;
}

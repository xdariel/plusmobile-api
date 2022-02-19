import { Field, Float, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { StatusType } from 'src/modules/products/entities/products.entity';

registerEnumType(StatusType, { name: 'StatusType' });

@ObjectType()
export class ProductsResponse {
  @Field(() => ID) id: string;
  @Field(() => String, )  name: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) subCategory: SolvedEntityResponse;
  @Field(() => Boolean, )  isActive: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => CloudFileResponse, {nullable: true}) photo?: CloudFileResponse;
  @Field(() => String )  sku: string;
  @Field(() => Float )  price: number;
  @Field(() => Float )  salePrice: number;
  @Field(() => StatusType, )  status: StatusType;
  @Field(() => Float,{nullable:true} )  weight?: number;
  @Field(() => Float,{nullable:true} )  length?: number;
  @Field(() => Float,{nullable:true} )  board?: number;
  @Field(() => Float,{nullable:true} )  width?: number;
  @Field(() => SolvedEntityResponse, {nullable: true}) brand?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, {nullable: true}) store?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, {nullable: true}) tax?: SolvedEntityResponse;
  @Field(() => [String], {nullable: true}) tags?: Array<string>;
  @Field(() => Boolean,{nullable: true} )  periodDiscount: boolean;
  @Field(() => Date, {nullable: true} )  periodDiscountFrom?: Date;
  @Field(() => Date, {nullable: true} )  periodDiscountTo?: Date;
  @Field(() => Float,{nullable:true} )  specialPrice?: number;
  @Field(() => [String], {nullable: true}) slug?: Array<string>;
  @Field(() => Float)  distributionPercentage: number;
  @Field(() => Float)  utilityPercentage: number;
  @Field(() => [SolvedEntityResponse]) attributes?: Array<SolvedEntityResponse>;
  @Field(() => [SolvedEntityResponse]) relatedProducts?: Array<SolvedEntityResponse>;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

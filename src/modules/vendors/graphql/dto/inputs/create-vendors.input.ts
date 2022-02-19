import { Field, InputType, ID, Float } from '@nestjs/graphql';
import { AccountType, NegotiationType } from 'src/modules/vendors/entities/vendors.entity';

@InputType()
export class CreateVendorsInput {
  @Field(() => ID, ) bank: string;
  @Field(() => ID, ) user: string;
  @Field(() => String, )  nameCompany: string;
  @Field(() => String, )  nit: string;
  @Field(() => String, )  nameLegalRepresentative: string;
  @Field(() => String, )  bankAccountNumber: string;
  @Field(() => AccountType, )  accountType: AccountType;
  @Field(() => String, )  documentNumber: string;
  @Field(() => String, )  corporateEmail: string;
  @Field(() => String, )  country: string;
  @Field(() => String, {nullable: true} )  observations?: string;
  @Field(() => NegotiationType, )  negotiationType: NegotiationType;
  @Field(() => Boolean )  globalDistribution: boolean;
  @Field(() => Float ,{nullable: true})  percentageValue?: number;
  @Field(() => Float ,{nullable: true})  netPercentageValue?: number;
  @Field(() => Date)  startContract: Date;
  @Field(() => Date)  endContract: Date;
  @Field(() => [String], )  alert: Array<string>;
}

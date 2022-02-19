import { Field, Float, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { AccountType, NegotiationType } from 'src/modules/vendors/entities/vendors.entity';

registerEnumType(AccountType, { name: 'AccountType' });
registerEnumType(NegotiationType, { name: 'NegotiationType' });

@ObjectType()
export class VendorsResponse {
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) bank: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, {nullable: true}) user: SolvedEntityResponse;
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

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

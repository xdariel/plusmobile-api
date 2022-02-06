import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

import { UserAssociatedTo } from '../../../entities/schemas/additional-info.schema';

@InputType()
export class AdditionalInfoInput {

  @Field(() => Boolean, { nullable: true }) applyPayroll?: boolean;
  @Field(() => Boolean, { nullable: true }) applyMultiLevel?: boolean;
  @Field(() => Date, { nullable: true }) admissionDate?: Date;
  @Field(() => Date, { nullable: true }) retirementDate?: Date;

  @Field({ nullable: true }) salary?: number;
  @Field(() => ID, { nullable: true }) company?: string;
  @Field(() => ID, { nullable: true }) branchOffice?: string;
  @Field(() => UserAssociatedTo, { nullable: true }) associatedTo?: UserAssociatedTo;
  @Field(() => ID, { nullable: true }) campus?: string;
  @Field(() => ID, { nullable: true }) subsidiary?: string;

  @Field({ nullable: true }) bloodType?: string;
  @Field({ nullable: true }) contractType?: string;
  @Field({ nullable: true }) bankAccount?: string;
  @Field({ nullable: true }) bankAccountType?: string;
  @Field({ nullable: true }) bank?: string;
  @Field({ nullable: true }) arl?: string;
  @Field({ nullable: true }) eps?: string;
  @Field({ nullable: true }) ccf?: string;
  @Field({ nullable: true }) afp?: string;
  @Field({ nullable: true }) neighborhood?: string;

}


@InputType()
export class PartialAdditionalInfoInput extends PartialType(AdditionalInfoInput) {

}




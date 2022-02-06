import { Field,  ObjectType, registerEnumType } from '@nestjs/graphql';

import { UserAssociatedTo } from '../../../entities/schemas/additional-info.schema';
import { SolvedEntityResponse } from '../../../../graphql/dto/responses/solved-entity.response';

registerEnumType(UserAssociatedTo, { name: 'UserAssociatedTo' });

@ObjectType()
export class AdditionalInfoResponse {

  @Field(() => Boolean, { nullable: true }) applyPayroll?: boolean;
  @Field(() => Boolean, { nullable: true }) applyMultiLevel?: boolean;
  @Field(() => Date, { nullable: true }) admissionDate?: Date;
  @Field(() => Date, { nullable: true }) retirementDate?: Date;

  @Field({ nullable: true }) salary?: number;

  @Field(() => SolvedEntityResponse, { nullable: true }) company?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) branchOffice?: SolvedEntityResponse;

  @Field(() => UserAssociatedTo, { nullable: true }) associatedTo?: UserAssociatedTo;
  @Field(() => SolvedEntityResponse, { nullable: true }) campus?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) subsidiary?: SolvedEntityResponse;

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






import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { Gender, DocumentTypeUser } from '../../../entities/schemas/profile.schema';
import { SolvedEntityResponse } from '../../../../graphql/dto/responses/solved-entity.response';
import { Prop } from '@nestjs/mongoose';

registerEnumType(Gender, { name: 'Gender' });
registerEnumType(DocumentTypeUser, { name: 'DocumentTypeUser' });

@ObjectType()
export class ProfileResponse {
  @Field({ nullable: true }) documentNumber?: string;
  @Field({ nullable: true }) country?: string;
  @Field(() => Gender, { nullable: true }) gender?: Gender;
  @Field(() => DocumentTypeUser, { nullable: true }) documentType?: DocumentTypeUser;
  @Field({ nullable: true }) zipCode?: string;
  @Field({ nullable: true }) city?: string;

  @Field({ nullable: true }) address?: string;
  @Field({ nullable: true }) state?: string;
  @Field(() => Date, { nullable: true }) birthDay?: Date;
  @Field({ nullable: true }) personalWeb?: string;
  @Field({ nullable: true }) btcWallet?: string;
  @Field({ nullable: true }) tronWallet?: string;
  @Field({ nullable: true }) phoneNumber?: string;
  @Field({ nullable: true }) aboutMe?: string;

  @Field({ nullable: true }) whatsapp?: string;
  @Field({ nullable: true }) facebook?: string;
  @Field({ nullable: true }) twitter?: string;
  @Field({ nullable: true }) instagram?: string;

  @Field(() => SolvedEntityResponse, { nullable: true }) area?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) position?: SolvedEntityResponse;
}






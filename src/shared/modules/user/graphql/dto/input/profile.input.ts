import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

import { Gender } from '../../../entities/schemas/profile.schema';
import { DocumentTypeUser } from '../../../entities/schemas/profile.schema';

@InputType()
export class ProfileInput {
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

  @Field(() => ID, { nullable: true }) area?: string;
  @Field(() => ID, { nullable: true }) position?: string;

}


@InputType()
export class PartialProfileInput extends PartialType(ProfileInput) {

}




import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { ProfileInput } from './profile.input';
import { BaseInput } from '../../../../../dto/base-input.dto';
import { AdditionalInfoInput } from './additional-info.input';
import { MultiLevelInfoInput } from './multilevel-info.input';


@InputType()
export class CreateUserInput extends BaseInput {
  @Field() @IsEmail() email: string;
  @Field() username: string;
  @Field() password: string;
  @Field() firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field(() => [ID]) roles: Array<string>;
  @Field(() => ProfileInput, { nullable: true }) profile?: ProfileInput;
  @Field(() => AdditionalInfoInput, { nullable: true }) additionalInfo?: AdditionalInfoInput;
  @Field(() => MultiLevelInfoInput, { nullable: true }) multiLevelInfo?: MultiLevelInfoInput;
  @Field(() => Boolean, { nullable: true }) isActive: boolean;
  @Field(() => Boolean, { nullable: true }) isAdmin: boolean;
  @Field(() => ID, { nullable: true }) avatarFile?: string;


}


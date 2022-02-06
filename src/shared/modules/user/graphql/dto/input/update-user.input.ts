import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { PartialProfileInput } from './profile.input';
import { CreateUserInput } from './create-user.input';
import { PartialAdditionalInfoInput } from './additional-info.input';
import { PartialMultiLevelInfoInput } from './multilevel-info.input';

@InputType()
export class PartialUserInput extends PartialType(OmitType(CreateUserInput, ['password', 'profile', 'additionalInfo', 'multiLevelInfo'] as const)) {
  @Field(() => PartialProfileInput, { nullable: true }) profile?: PartialProfileInput;
  @Field(() => PartialAdditionalInfoInput, { nullable: true }) additionalInfo?: PartialAdditionalInfoInput;
  @Field(() => PartialMultiLevelInfoInput, { nullable: true }) multiLevelInfo?: PartialMultiLevelInfoInput;
}


@InputType()
export class UpdateMeInput extends PartialType(OmitType(PartialUserInput, [ 'isAdmin', 'isActive', 'roles', 'email'] as const)) {
}


@InputType()
export class UpdateUserInput {

  @Field(() => ID) entityId: string;
  @Field(() => PartialUserInput) update: PartialUserInput;

}

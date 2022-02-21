import { InputType, Field, PartialType, ID } from '@nestjs/graphql';


@InputType()
export class AdditionalInfoInput {
  @Field(() => Boolean, { nullable: true }) applyMultiLevel?: boolean;

}


@InputType()
export class PartialAdditionalInfoInput extends PartialType(AdditionalInfoInput) {

}




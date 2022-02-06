import { Field, InputType,  PartialType } from '@nestjs/graphql';

@InputType()
export class MultiLevelInfoInput {
  @Field(() => String, { nullable: true }) sponsorCode?: string;
}


@InputType()
export class PartialMultiLevelInfoInput extends PartialType(MultiLevelInfoInput) {
}


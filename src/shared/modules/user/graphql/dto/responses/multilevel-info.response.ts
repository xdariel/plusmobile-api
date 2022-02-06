import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class MultiLevelInfoResponse {
  @Field(() => ID, { nullable: true }) sponsorId?: string;
  @Field(() => String, { nullable: true }) sponsorCode?: string;
  @Field(() => String, { nullable: true }) refCode?: string;

}


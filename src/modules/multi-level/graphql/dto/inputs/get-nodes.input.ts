import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class GetNodesInput {
  @Field(() => ID) userId: string;
}

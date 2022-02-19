import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdStoreInput {
  @Field(() => ID, )  entity__Id: string;
}

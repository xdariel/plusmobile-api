import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdVendorsInput {
  @Field(() => ID, )  entity__Id: string;
}

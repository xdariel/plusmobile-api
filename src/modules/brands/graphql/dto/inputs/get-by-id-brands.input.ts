import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdBrandsInput {
  @Field(() => ID, )  entity__Id: string;
}

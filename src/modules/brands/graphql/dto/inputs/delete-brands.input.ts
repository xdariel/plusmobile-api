import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteBrandsInput {
  @Field(() => ID, )  entityId: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProductsInput {
  @Field(() => ID, )  entityId: string;
}

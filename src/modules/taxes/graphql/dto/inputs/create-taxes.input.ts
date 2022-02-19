import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateTaxesInput {
  @Field(() => String, )  name: string;
  @Field(() => Float, )  tax: number;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, {defaultValue: true} )  isActive?: boolean;
}

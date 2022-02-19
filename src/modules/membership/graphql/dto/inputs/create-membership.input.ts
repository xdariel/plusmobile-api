import { Field, InputType, ID, Float } from '@nestjs/graphql';
import { ExpirationType } from 'src/modules/membership/entities/membership.entity';

@InputType()
export class CreateMembershipInput {
  @Field(() => String, )  name: string;
  @Field(() => Float )  price: number;
  @Field(() => ExpirationType, )  expiration: ExpirationType;
  @Field(() => Boolean, )  isActive: boolean;
  @Field(() => ID, {nullable: true}) logo?: string;
  @Field(() => String,{nullable: true} )  description?: string;
  @Field(() => [ID]) relatedProducts: Array<string>;
}

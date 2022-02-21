import { Field,  ObjectType, } from '@nestjs/graphql';



@ObjectType()
export class AdditionalInfoResponse {
  @Field(() => Boolean, { nullable: true }) applyMultiLevel?: boolean;
}






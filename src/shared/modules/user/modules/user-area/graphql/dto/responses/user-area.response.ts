import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from '../../../../../../graphql/dto/responses/solved-entity.response';

@ObjectType()
export class UserAreaResponse {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field({ nullable: true }) description?: string;
  @Field(() => Boolean) isActive: boolean;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

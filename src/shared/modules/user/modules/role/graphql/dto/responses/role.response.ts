import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PermitsResponse } from './permits.response';
import { SolvedEntityResponse } from '../../../../../../graphql/dto/responses/solved-entity.response';


@ObjectType()
export class RoleResponse {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field({ nullable: true }) description?: string;
  @Field(() => [PermitsResponse]) permits: Array<PermitsResponse>;
  @Field(() => Boolean, { nullable: true }) onlyAdmin: boolean;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;
}



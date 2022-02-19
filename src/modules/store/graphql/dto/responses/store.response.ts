import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class StoreResponse {
  @Field(() => ID) id: string;
  @Field(() => String, )  name: string;
  @Field(() => String, )  email: string;
  @Field(() => String, )  phone: string;
  @Field(() => String, )  address: string;
  @Field(() => String, )  country: string;
  @Field(() => String, )  city: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) vendors: SolvedEntityResponse;
  @Field(() => Boolean, {nullable: true} )  isActive?: boolean;
  @Field(() => Boolean, {nullable: true} )  isRoot?: boolean;
  @Field(() => String, )  description?: string;
  @Field(() => CloudFileResponse, {nullable: true}) logo?: CloudFileResponse;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class AttributesResponse {
  @Field(() => ID) id: string;
  @Field(() => CloudFileResponse, {nullable: true}) image?: CloudFileResponse;
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  color?: string;
  @Field(() => String, {nullable: true} )  slug?: string;
  @Field(() => String, {nullable: true} )  listName?: string;
  @Field(() => String, {nullable: true} )  listSlug?: string;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

import { Field, Float, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ExpirationType } from 'src/modules/membership/entities/membership.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

registerEnumType(ExpirationType, { name: 'ExpirationType' });

@ObjectType()
export class MembershipResponse {
  @Field(() => ID) id: string;
  @Field(() => String, )  name: string;
  @Field(() => Float )  price: number;
  @Field(() => ExpirationType, )  expiration: ExpirationType;
  @Field(() => Boolean, )  isActive: boolean;
  @Field(() => CloudFileResponse, {nullable: true}) logo?: CloudFileResponse;
  @Field(() => String,{nullable: true} )  description?: string;
  @Field(() => [SolvedEntityResponse]) relatedProducts: Array<SolvedEntityResponse>;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

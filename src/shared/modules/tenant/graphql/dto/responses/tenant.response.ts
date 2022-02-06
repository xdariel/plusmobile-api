import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TenantInfoResponse } from './tenant-info.response';
import { SolvedEntityResponse } from '../../../../graphql/dto/responses/solved-entity.response';

@ObjectType()
export class TenantResponse  {

  @Field(() => ID) id: string;
  @Field() code: string;
  @Field() name: string;
  @Field(()=>Boolean) isActive: boolean;
  @Field(()=>TenantInfoResponse, {nullable: true}) info: TenantInfoResponse;

  @Field(() => SolvedEntityResponse, {nullable: true}) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, {nullable: true}) createdBy?: SolvedEntityResponse;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;

}


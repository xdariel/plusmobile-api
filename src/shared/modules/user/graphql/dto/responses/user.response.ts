import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { ProfileResponse } from './profile.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { CloudFileResponse } from '../../../../graphql/dto/responses/cloud-file.response';
import { AdditionalInfoResponse } from './additional-info.response';
import { MultiLevelInfoResponse } from './multilevel-info.response';
import { UserType } from '../../../entities/user.entity';


registerEnumType(UserType, { name: 'UserType' });

@ObjectType()
export class UserResponse {

  @Field(() => ID) id: string;
  @Field() email: string;
  @Field() username: string;

  @Field({ nullable: true }) lastLogin?: Date;
  @Field() firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field(() => Boolean) verified: boolean;
  @Field(() => UserType, { nullable: true }) type: UserType;
  @Field(() => Boolean, { nullable: true }) isActive: boolean;
  @Field(() => Boolean, { nullable: true }) isAdmin: boolean;
  @Field(() => [SolvedEntityResponse]) roles: Array<SolvedEntityResponse>;
  @Field(() => ProfileResponse, { nullable: true }) profile?: ProfileResponse;
  @Field(() => AdditionalInfoResponse, { nullable: true }) additionalInfo?: AdditionalInfoResponse;
  @Field(() => MultiLevelInfoResponse, { nullable: true }) multiLevelInfo?: MultiLevelInfoResponse;
  @Field(() => CloudFileResponse, { nullable: true }) avatarFile?: CloudFileResponse;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;

}


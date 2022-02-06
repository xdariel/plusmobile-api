import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { FileStatus, FileStorageType } from '../../../entities/files.entity';
import { SolvedEntityResponse } from '../../../../graphql/dto/responses/solved-entity.response';

registerEnumType(FileStorageType, {name: 'FileStorageType'});
registerEnumType(FileStatus, {name: 'FileStatus'});

@ObjectType()
export class FilesResponse {
  @Field(() => ID) id: string;

  @Field() url: string;
  @Field() key: string;
  @Field() filename: string;
  @Field({ nullable: true }) bytes?: number;
  @Field(() => FileStorageType) storage: FileStorageType;
  @Field(() => FileStatus) status: FileStatus;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

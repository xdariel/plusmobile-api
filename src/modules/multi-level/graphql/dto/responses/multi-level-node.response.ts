import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IMultiLevelNode } from '../../../interfaces/IMultiLevelNode';
import {
  CloudFileResponse,
} from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

@ObjectType()
export class MultiLevelNodeResponse implements IMultiLevelNode {
  @Field(() => ID) userId: string;
  @Field({ nullable: true }) firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field({ nullable: true }) email: string;
  @Field({ nullable: true }) refCode: string;
  @Field({ nullable: true }) sponsorCode: string;
  @Field({ nullable: true }) username: string;
  @Field(() => CloudFileResponse, { nullable: true }) photoFile?: CloudFileResponse;


}

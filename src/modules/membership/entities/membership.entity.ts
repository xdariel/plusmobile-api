import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

export enum ExpirationType {
  ANNUAL='ANNUAL',
  BIANNUAL='BIANNUAL',
  QUARTERLY='QUARTERLY',
  BIMONTHLY='BIMONTHLY',
  MONTHLY='BIMONTHLY'
}

@Schema({ ...SchemaConstants, collection: 'membership' })
export class MembershipEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() price: number;
  @Prop({type:String}) expiration: ExpirationType;
  @Prop() isActive: boolean;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) logo?: string;
  @Prop({type:String}) description?: string;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) relatedProducts?: Array<string>;
}

export const MembershipSchema = SchemaFactory.createForClass(MembershipEntity);

export const MembershipFeature = {
  name: MembershipEntity.name,
  schema: MembershipSchema,
};

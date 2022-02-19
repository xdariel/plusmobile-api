import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { BanksEntity } from 'src/modules/banks/entities/banks.entity';
import { Schema as MSchema } from 'mongoose';

export enum AccountType {
  CURRENT='CURRENT',
  SAVINGS='SAVINGS',
}

export enum NegotiationType {
  PERCENTAGE='PERCENTAGE',
  FIXED_VALUE='FIXED_VALUE',
  PROJECTION='PROJECTION',
}

@Schema({ ...SchemaConstants, collection: 'vendors' })
export class VendorsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => BanksEntity}) bank: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserEntity}) user: string;
  @Prop() nameCompany: string;
  @Prop() nit: string;
  @Prop() nameLegalRepresentative: string;
  @Prop() bankAccountNumber: string;
  @Prop({type:String}) accountType: AccountType;
  @Prop() documentNumber: string;
  @Prop({ unique: true }) corporateEmail: string;
  @Prop() country: string;
  @Prop() observations?: string;
  @Prop({type:String}) negotiationType: NegotiationType;
  @Prop() globalDistribution: boolean;
  @Prop() percentageValue?: number;
  @Prop() netPercentageValue?: number;
  @Prop() startContract: Date;
  @Prop() endContract: Date;
  @Prop() alert: Array<string>;
}

export const VendorsSchema = SchemaFactory.createForClass(VendorsEntity);

export const VendorsFeature = {
  name: VendorsEntity.name,
  schema: VendorsSchema,
};

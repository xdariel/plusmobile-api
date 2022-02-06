import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { UserAreaEntity } from '../../modules/user-area/entities/user-area.entity';
import { UserPositionEntity } from '../../modules/user-position/entities/user-position.entity';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  TRANS_GENDER = 'TRANS_GENDER',
  NOT_SPECIFIED = 'NOT_SPECIFIED'
}
export enum DocumentTypeUser {
  ID_CARD = 'ID_CARD',
  PASSPORT = 'PASSPORT',
  FOREIGN_CERTIFICATE = 'FOREIGN_CERTIFICATE',
  PEP = 'PEP'
}





export class ProfileEntity {
  @Prop({ _id: false })
  @Prop() documentNumber?: string;
  @Prop() country?: string;

  @Prop({ type: String }) gender?: Gender;
  @Prop({ type: String }) documentType?: DocumentTypeUser;
  @Prop() zipCode?: string;

  @Prop() city?: string;

  @Prop() address?: string;
  @Prop() state?: string;
  @Prop({ type: Date }) birthDay?: Date;
  @Prop() personalWeb?: string;
  @Prop() btcWallet?: string;
  @Prop() tronWallet?: string;
  @Prop() phoneNumber?: string;

  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserAreaEntity }) area?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserPositionEntity }) position?: string;
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);

export const ProfileFeature: ModelDefinition = {
  name: ProfileEntity.name,
  schema: ProfileSchema,
};

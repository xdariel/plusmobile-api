import { IEntity } from 'src/shared/core/interfaces/IEntity';
import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MSchema, } from 'mongoose';

@Schema()
export class PersistentEntity
  implements IEntity {
  id: string;
  @Prop({ type: Date} ) createdAt?: Date;
  @Prop({ type: Date} ) updatedAt?: Date;
  @Prop({ type: MSchema.Types.ObjectId} ) createdBy?: string;
  @Prop({ type: MSchema.Types.ObjectId} ) updatedBy?: string;


}

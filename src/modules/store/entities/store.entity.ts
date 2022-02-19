import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { VendorsEntity } from 'src/modules/vendors/entities/vendors.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

@Schema({ ...SchemaConstants, collection: 'store' })
export class StoreEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() email: string;
  @Prop() phone: string;
  @Prop() address: string;
  @Prop() country: string;
  @Prop() city: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => VendorsEntity}) vendors: string;
  @Prop() isActive?: boolean;
  @Prop() isRoot?: boolean;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity}) logo?: string;
}

export const StoreSchema = SchemaFactory.createForClass(StoreEntity);

export const StoreFeature = {
  name: StoreEntity.name,
  schema: StoreSchema,
};

import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

@Schema({ ...SchemaConstants, collection: 'brands' })
export class BrandsEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) banner?: string;
  @Prop() order: number;
  @Prop() isActive: boolean;
  @Prop() featured: boolean;
}

export const BrandsSchema = SchemaFactory.createForClass(BrandsEntity);

export const BrandsFeature = {
  name: BrandsEntity.name,
  schema: BrandsSchema,
};

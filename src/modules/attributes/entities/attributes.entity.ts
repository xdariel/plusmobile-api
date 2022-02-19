import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'attributes' })
export class AttributesEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) image?: string;
  @Prop() name: string;
  @Prop() slug?: string;
  @Prop() listName?: string;
  @Prop() listSlug?: string;
  @Prop() color?: string;
}

export const AttributesSchema = SchemaFactory.createForClass(AttributesEntity);

export const AttributesFeature = {
  name: AttributesEntity.name,
  schema: AttributesSchema,
};

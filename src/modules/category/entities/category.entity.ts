import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'category' })
export class CategoryEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) banner?: string;
  @Prop() icon: string;
  @Prop() order: number;
  @Prop() isActive: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity);

export const CategoryFeature = {
  name: CategoryEntity.name,
  schema: CategorySchema,
};

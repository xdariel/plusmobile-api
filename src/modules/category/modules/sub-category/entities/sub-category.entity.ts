import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import {  Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'sub-category' })
export class SubCategoryEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>CategoryEntity}) category?: string;
  @Prop() name: string;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () =>FilesEntity}) banner?: string;
  @Prop() icon: string;
  @Prop() order: number;
  @Prop() isActive: boolean;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategoryEntity);

export const SubCategoryFeature = {
  name: SubCategoryEntity.name,
  schema: SubCategorySchema,
};

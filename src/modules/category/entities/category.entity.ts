import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'category' })
export class CategoryEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity);

export const CategoryFeature = {
  name: CategoryEntity.name,
  schema: CategorySchema,
};

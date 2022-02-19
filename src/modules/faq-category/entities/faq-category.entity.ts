import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'faq-category' })
export class FaqCategoryEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive: boolean;
}

export const FaqCategorySchema = SchemaFactory.createForClass(FaqCategoryEntity);

export const FaqCategoryFeature = {
  name: FaqCategoryEntity.name,
  schema: FaqCategorySchema,
};

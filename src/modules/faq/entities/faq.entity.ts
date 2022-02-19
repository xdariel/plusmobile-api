import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { FaqCategoryEntity } from 'src/modules/faq-category/entities/faq-category.entity';

@Schema({ ...SchemaConstants, collection: 'faq' })
export class FaqEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FaqCategoryEntity} ) category: string;
  @Prop() question: string;
  @Prop() answer: string;
}

export const FaqSchema = SchemaFactory.createForClass(FaqEntity);

export const FaqFeature = {
  name: FaqEntity.name,
  schema: FaqSchema,
};

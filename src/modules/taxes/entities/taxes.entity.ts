import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'taxes' })
export class TaxesEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() tax:number; 
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const TaxesSchema = SchemaFactory.createForClass(TaxesEntity);

export const TaxesFeature = {
  name: TaxesEntity.name,
  schema: TaxesSchema,
};

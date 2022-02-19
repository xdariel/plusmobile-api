import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'banks' })
export class BanksEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const BanksSchema = SchemaFactory.createForClass(BanksEntity);

export const BanksFeature = {
  name: BanksEntity.name,
  schema: BanksSchema,
};

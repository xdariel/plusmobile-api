import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'support-ticket' })
export class SupportTicketEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const SupportTicketSchema = SchemaFactory.createForClass(SupportTicketEntity);

export const SupportTicketFeature = {
  name: SupportTicketEntity.name,
  schema: SupportTicketSchema,
};

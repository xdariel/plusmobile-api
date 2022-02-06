import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MultiLevelInfo {
  @Prop() sponsorCode?: string;
  @Prop() refCode?: string;
}

export const MultilevelInfoSchema = SchemaFactory.createForClass(MultiLevelInfo);

export const MultiLevelInfoFeature = {
  name: MultiLevelInfo.name,
  schema: MultilevelInfoSchema,
};

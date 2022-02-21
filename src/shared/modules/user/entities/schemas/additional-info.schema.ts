import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';

export class AdditionalInfoEntity {
  @Prop({ _id: false })
  @Prop() applyMultiLevel?: boolean;

}

export const AdditionalInfoSchema = SchemaFactory.createForClass(AdditionalInfoEntity);

export const AdditionalInfoFeature: ModelDefinition = {
  name: AdditionalInfoEntity.name,
  schema: AdditionalInfoSchema,
};

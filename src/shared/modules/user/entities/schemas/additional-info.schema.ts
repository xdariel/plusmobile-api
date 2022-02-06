import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';




export enum UserAssociatedTo {
  CAMPUS = 'CAMPUS',
  SUBSIDIARY = 'SUBSIDIARY',
}


export class AdditionalInfoEntity {
  @Prop({ _id: false })

  @Prop() applyPayroll?: boolean;
  @Prop() applyMultiLevel?: boolean;

  @Prop() salary?: number;
  @Prop() admissionDate?: Date;
  @Prop() retirementDate?: Date;
  @Prop({ type: MSchema.Types.ObjectId}) company?: string;
  @Prop({ type: MSchema.Types.ObjectId}) branchOffice?: string;

  @Prop() bankAccountType?: string;
  @Prop() bankAccount?: string;
  @Prop() bank?: string;
  @Prop() arl?: string;
  @Prop() eps?: string;
  @Prop() ccf?: string;
  @Prop() afp?: string;
  @Prop() neighborhood?: string;
  @Prop() bloodType?: string;
  @Prop() contractType?: string;


  @Prop({ type: String }) associatedTo?: UserAssociatedTo;

  @Prop({ type: MSchema.Types.ObjectId}) campus?: string;
  //OR
  @Prop({ type: MSchema.Types.ObjectId} ) subsidiary?: string;


}

export const AdditionalInfoSchema = SchemaFactory.createForClass(AdditionalInfoEntity);

export const AdditionalInfoFeature: ModelDefinition = {
  name: AdditionalInfoEntity.name,
  schema: AdditionalInfoSchema,
};

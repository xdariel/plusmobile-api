import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateTaxesInput } from './create-taxes.input';


@InputType()
export class PartialTaxesInput extends PartialType(CreateTaxesInput) {}

@InputType()
export class UpdateTaxesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialTaxesInput)  update: PartialTaxesInput;

}

import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateVendorsInput } from './create-vendors.input';


@InputType()
export class PartialVendorsInput extends PartialType(CreateVendorsInput) {}

@InputType()
export class UpdateVendorsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialVendorsInput)  update: PartialVendorsInput;

}

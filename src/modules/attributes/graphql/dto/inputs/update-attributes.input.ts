import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateAttributesInput } from './create-attributes.input';


@InputType()
export class PartialAttributesInput extends PartialType(CreateAttributesInput) {}

@InputType()
export class UpdateAttributesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialAttributesInput)  update: PartialAttributesInput;

}

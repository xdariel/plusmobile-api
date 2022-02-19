import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFaqInput } from './create-faq.input';


@InputType()
export class PartialFaqInput extends PartialType(CreateFaqInput) {}

@InputType()
export class UpdateFaqInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFaqInput)  update: PartialFaqInput;

}

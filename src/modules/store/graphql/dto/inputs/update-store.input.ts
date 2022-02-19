import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateStoreInput } from './create-store.input';


@InputType()
export class PartialStoreInput extends PartialType(CreateStoreInput) {}

@InputType()
export class UpdateStoreInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialStoreInput)  update: PartialStoreInput;

}

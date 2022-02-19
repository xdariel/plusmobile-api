import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateBanksInput } from './create-banks.input';


@InputType()
export class PartialBanksInput extends PartialType(CreateBanksInput) {}

@InputType()
export class UpdateBanksInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialBanksInput)  update: PartialBanksInput;

}

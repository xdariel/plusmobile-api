import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateBrandsInput } from './create-brands.input';


@InputType()
export class PartialBrandsInput extends PartialType(CreateBrandsInput) {}

@InputType()
export class UpdateBrandsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialBrandsInput)  update: PartialBrandsInput;

}

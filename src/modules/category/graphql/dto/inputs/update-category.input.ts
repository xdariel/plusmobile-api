import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';


@InputType()
export class PartialCategoryInput extends PartialType(CreateCategoryInput) {}

@InputType()
export class UpdateCategoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialCategoryInput)  update: PartialCategoryInput;

}

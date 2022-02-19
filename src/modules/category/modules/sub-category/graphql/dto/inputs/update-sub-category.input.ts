import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateSubCategoryInput } from './create-sub-category.input';


@InputType()
export class PartialSubCategoryInput extends PartialType(CreateSubCategoryInput) {}

@InputType()
export class UpdateSubCategoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialSubCategoryInput)  update: PartialSubCategoryInput;

}

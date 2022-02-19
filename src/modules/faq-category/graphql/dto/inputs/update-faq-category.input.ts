import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFaqCategoryInput } from './create-faq-category.input';


@InputType()
export class PartialFaqCategoryInput extends PartialType(CreateFaqCategoryInput) {}

@InputType()
export class UpdateFaqCategoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFaqCategoryInput)  update: PartialFaqCategoryInput;

}

import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateProductsInput } from './create-products.input';


@InputType()
export class PartialProductsInput extends PartialType(CreateProductsInput) {}

@InputType()
export class UpdateProductsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialProductsInput)  update: PartialProductsInput;

}

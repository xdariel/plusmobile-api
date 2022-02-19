import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByProductsInput {
  @Field(() => OrderByType, { nullable: true })  name?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  price?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  salePrice?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  weight?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  length?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  board?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  width?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  specialPrice?: OrderByType;

  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

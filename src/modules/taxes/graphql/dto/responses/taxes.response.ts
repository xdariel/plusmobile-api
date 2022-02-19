import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class TaxesResponse {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field() tax: number;
  @Field() isActive?: boolean;
  @Field({nullable: true}) description?: string;

  @Field(() => SolvedEntityResponse, { nullable: true }) updatedBy?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) createdBy?: SolvedEntityResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}

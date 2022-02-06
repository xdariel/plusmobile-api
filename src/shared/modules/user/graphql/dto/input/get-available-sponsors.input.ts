import { InputType, Field, ID } from '@nestjs/graphql';
import { BaseInput } from 'src/shared/dto/base-input.dto';

@InputType()
export class GetAvailableSponsorsInput extends BaseInput {
  @Field(() => ID, { nullable: true }) userId?: string;
}


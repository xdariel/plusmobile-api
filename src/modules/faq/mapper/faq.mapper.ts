import { FaqEntity } from '../entities/faq.entity';

import { Injectable } from '@nestjs/common';
import { FaqResponse } from '../graphql/dto/responses/faq.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFaqInput } from '../graphql/dto/inputs/create-faq.input';

@Injectable()
export class FaqMapper implements BaseMapper<FaqEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFaqInput>(dto: CreateFaqInput): FaqEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FaqResponse>(dto: FaqResponse): FaqEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: FaqEntity): FaqResponse {
    return {
      ...rest,
      category: rest.category ? { id: rest.category } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

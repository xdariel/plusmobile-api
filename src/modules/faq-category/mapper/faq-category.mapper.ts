import { FaqCategoryEntity } from '../entities/faq-category.entity';

import { Injectable } from '@nestjs/common';
import { FaqCategoryResponse } from '../graphql/dto/responses/faq-category.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFaqCategoryInput } from '../graphql/dto/inputs/create-faq-category.input';

@Injectable()
export class FaqCategoryMapper implements BaseMapper<FaqCategoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFaqCategoryInput>(dto: CreateFaqCategoryInput): FaqCategoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FaqCategoryResponse>(dto: FaqCategoryResponse): FaqCategoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: FaqCategoryEntity): FaqCategoryResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

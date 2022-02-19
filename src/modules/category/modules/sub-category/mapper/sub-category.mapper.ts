import { SubCategoryEntity } from '../entities/sub-category.entity';

import { Injectable } from '@nestjs/common';
import { SubCategoryResponse } from '../graphql/dto/responses/sub-category.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateSubCategoryInput } from '../graphql/dto/inputs/create-sub-category.input';

@Injectable()
export class SubCategoryMapper implements BaseMapper<SubCategoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateSubCategoryInput>(dto: CreateSubCategoryInput): SubCategoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = SubCategoryResponse>(dto: SubCategoryResponse): SubCategoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: SubCategoryEntity): SubCategoryResponse {
    return {
      ...rest,
      category: rest.category ? { id: rest.category } : undefined,
      banner: rest.banner ? { id: rest.banner } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

import { CategoryEntity } from '../entities/category.entity';

import { Injectable } from '@nestjs/common';
import { CategoryResponse } from '../graphql/dto/responses/category.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateCategoryInput } from '../graphql/dto/inputs/create-category.input';

@Injectable()
export class CategoryMapper implements BaseMapper<CategoryEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateCategoryInput>(dto: CreateCategoryInput): CategoryEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = CategoryResponse>(dto: CategoryResponse): CategoryEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: CategoryEntity): CategoryResponse {
    return {
      ...rest,
      banner: rest.banner ? { id: rest.banner } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

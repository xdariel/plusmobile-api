import { AttributesEntity } from '../entities/attributes.entity';

import { Injectable } from '@nestjs/common';
import { AttributesResponse } from '../graphql/dto/responses/attributes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateAttributesInput } from '../graphql/dto/inputs/create-attributes.input';

@Injectable()
export class AttributesMapper implements BaseMapper<AttributesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateAttributesInput>(dto: CreateAttributesInput): AttributesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = AttributesResponse>(dto: AttributesResponse): AttributesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: AttributesEntity): AttributesResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
      image: rest?.image ? { id: rest.image } : undefined,
    };
  }

}

import { StoreEntity } from '../entities/store.entity';

import { Injectable } from '@nestjs/common';
import { StoreResponse } from '../graphql/dto/responses/store.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateStoreInput } from '../graphql/dto/inputs/create-store.input';

@Injectable()
export class StoreMapper implements BaseMapper<StoreEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateStoreInput>(dto: CreateStoreInput): StoreEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = StoreResponse>(dto: StoreResponse): StoreEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: StoreEntity): StoreResponse {
    return {
      ...rest,
      vendors: rest.vendors ? { id: rest.vendors } : undefined,
      logo: rest.logo ? { id: rest.logo } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

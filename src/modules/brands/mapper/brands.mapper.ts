import { BrandsEntity } from '../entities/brands.entity';

import { Injectable } from '@nestjs/common';
import { BrandsResponse } from '../graphql/dto/responses/brands.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateBrandsInput } from '../graphql/dto/inputs/create-brands.input';

@Injectable()
export class BrandsMapper implements BaseMapper<BrandsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateBrandsInput>(dto: CreateBrandsInput): BrandsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = BrandsResponse>(dto: BrandsResponse): BrandsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: BrandsEntity): BrandsResponse {
    return {
      ...rest,
      banner: rest?.banner ? { id: rest.banner } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

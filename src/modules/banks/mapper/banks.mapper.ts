import { BanksEntity } from '../entities/banks.entity';

import { Injectable } from '@nestjs/common';
import { BanksResponse } from '../graphql/dto/responses/banks.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateBanksInput } from '../graphql/dto/inputs/create-banks.input';

@Injectable()
export class BanksMapper implements BaseMapper<BanksEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateBanksInput>(dto: CreateBanksInput): BanksEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = BanksResponse>(dto: BanksResponse): BanksEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: BanksEntity): BanksResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

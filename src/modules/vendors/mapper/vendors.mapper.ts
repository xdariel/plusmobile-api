import { VendorsEntity } from '../entities/vendors.entity';

import { Injectable } from '@nestjs/common';
import { VendorsResponse } from '../graphql/dto/responses/vendors.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateVendorsInput } from '../graphql/dto/inputs/create-vendors.input';

@Injectable()
export class VendorsMapper implements BaseMapper<VendorsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateVendorsInput>(dto: CreateVendorsInput): VendorsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = VendorsResponse>(dto: VendorsResponse): VendorsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: VendorsEntity): VendorsResponse {
    return {
      ...rest,
      bank: rest.bank ? { id: rest.bank } : undefined,
      user: rest.user ? { id: rest.user } : undefined,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

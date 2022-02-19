import { TaxesEntity } from '../entities/taxes.entity';

import { Injectable } from '@nestjs/common';
import { TaxesResponse } from '../graphql/dto/responses/taxes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateTaxesInput } from '../graphql/dto/inputs/create-taxes.input';

@Injectable()
export class TaxesMapper implements BaseMapper<TaxesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateTaxesInput>(dto: CreateTaxesInput): TaxesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = TaxesResponse>(dto: TaxesResponse): TaxesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: TaxesEntity): TaxesResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

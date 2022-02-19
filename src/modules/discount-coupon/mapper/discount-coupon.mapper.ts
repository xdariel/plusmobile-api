import { DiscountCouponEntity } from '../entities/discount-coupon.entity';

import { Injectable } from '@nestjs/common';
import { DiscountCouponResponse } from '../graphql/dto/responses/discount-coupon.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDiscountCouponInput } from '../graphql/dto/inputs/create-discount-coupon.input';

@Injectable()
export class DiscountCouponMapper implements BaseMapper<DiscountCouponEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDiscountCouponInput>(dto: CreateDiscountCouponInput): DiscountCouponEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DiscountCouponResponse>(dto: DiscountCouponResponse): DiscountCouponEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: DiscountCouponEntity): DiscountCouponResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
      client: rest?.client ? { id: rest.client } : undefined,
      product: rest?.product ? { id: rest.product } : undefined,
    };
  }

}

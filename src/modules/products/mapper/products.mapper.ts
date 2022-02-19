import { ProductsEntity } from '../entities/products.entity';

import { Injectable } from '@nestjs/common';
import { ProductsResponse } from '../graphql/dto/responses/products.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateProductsInput } from '../graphql/dto/inputs/create-products.input';

@Injectable()
export class ProductsMapper implements BaseMapper<ProductsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateProductsInput>(dto: CreateProductsInput): ProductsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = ProductsResponse>(dto: ProductsResponse): ProductsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: ProductsEntity): ProductsResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
      subCategory: rest?.subCategory ? { id: rest.subCategory } : undefined,
      photo: rest?.photo ? { id: rest.photo } : undefined,
      brand: rest?.brand ? { id: rest.brand } : undefined,
      store: rest?.store ? { id: rest.store } : undefined,
      tax: rest?.tax ? { id: rest.tax } : undefined,
      relatedProducts: Array.from(rest.relatedProducts ?? []).map((x)=>{
        return{
          id: x
        }
      }),
      attributes: Array.from(rest.attributes ?? []).map((x)=>{
        return{
          id: x
        }
      }),
    };
  }

}

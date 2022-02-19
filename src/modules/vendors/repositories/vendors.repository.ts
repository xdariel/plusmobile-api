import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { VendorsEntity } from '../entities/vendors.entity';

@Injectable()
export class VendorsRepository extends BaseRepository<VendorsEntity, FilterableFieldsType<VendorsEntity>> {
  constructor(
    @Inject(VendorsEntity.name) private readonly _vendorsModel: Model<VendorsEntity>,
  ) {
    super(_vendorsModel, VendorsRepository.name);
  }
}

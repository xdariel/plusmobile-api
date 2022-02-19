import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { BanksEntity } from '../entities/banks.entity';

@Injectable()
export class BanksRepository extends BaseRepository<BanksEntity, FilterableFieldsType<BanksEntity>> {
  constructor(
    @Inject(BanksEntity.name) private readonly _banksModel: Model<BanksEntity>,
  ) {
    super(_banksModel, BanksRepository.name);
  }
}

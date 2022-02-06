import { Inject, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { BaseRepository } from '../../data-access/mongoose/base.respository';
import { UserEntity } from '../entities/user.entity';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { IAssociatedUserFilter } from '../interfaces/IAssociatedUserFilter';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity, FilterableFieldsType<UserEntity>> {
  constructor(
    @Inject(UserEntity.name) private _entityRepo: Model<UserEntity>,
  ) {
    super(_entityRepo, UserRepository.name);
  }

  private processAssociatedFilter(params: IAssociatedUserFilter): FilterQuery<UserEntity> {
    let filter: FilterQuery<UserEntity> = {
      'additionalInfo.company': params.company,
    };

    if (params?.branchOffice) {
      filter = {
        ...filter,
        'additionalInfo.branchOffice': params.branchOffice,
      };
    }

    if (params?.campus && !params?.subsidiary) {
      filter = {
        ...filter,
        'additionalInfo.campus': params.campus,
      };
    }

    if (params?.subsidiary && !params?.campus) {
      filter = {
        ...filter,
        'additionalInfo.subsidiary': params.subsidiary,
      };
    }
    return filter;
  }

  async getAssociatedUsers(
    params: IAssociatedUserFilter,
  ): Promise<Array<UserEntity>> {
    const filter = this.processAssociatedFilter(params);
    const items = await this._model.find(filter)
      .lean();
    return items.map(this.transform);
  }


  async existsUserWithRefCode(refCode: string): Promise<boolean> {
    return await this._model.exists({
      'multiLevelInfo.refCode': refCode,
    });
  }

  async getUserByRefCode(refCode: string): Promise<UserEntity | null> {
    const user = await this._model.findOne({
      'multiLevelInfo.refCode': refCode,
    }).lean();
    return user ? this.transform(user) : null;
  }

  async getMultiLevelUsers(where?: FilterableFieldsType<UserEntity>): Promise<Array<UserEntity>> {

    // @ts-ignore
    const filter: FilterQuery<UserEntity> = super.buildWhere(where);

    const users = await this._model.find({
      ...filter,
      'additionalInfo.applyMultiLevel': true,
      'multiLevelInfo.refCode': { $exists: true },
      'multiLevelInfo.sponsorCode': { $exists: true },
    }).lean();
    return users.map(this.transform);
  }

  async getMyDirectUsers(refCode: string): Promise<Array<UserEntity>> {
    const users = await this._model.find({
      'multiLevelInfo.sponsorCode': refCode,
    }).lean();
    return users.map(this.transform);
  }

  async getUpUser(sponsorCode: string): Promise<UserEntity | null> {
    const user = await this._model
      .findOne({
        'multiLevelInfo.refCode': sponsorCode,
      })
      .lean({ virtuals: true });
    return user ? this.transform(user) : null;
  }


}

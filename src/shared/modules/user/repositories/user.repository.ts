import { Inject, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { BaseRepository } from '../../data-access/mongoose/base.respository';
import { UserEntity, UserType } from '../entities/user.entity';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';


@Injectable()
export class UserRepository extends BaseRepository<UserEntity, FilterableFieldsType<UserEntity>> {
  constructor(
    @Inject(UserEntity.name) private _entityRepo: Model<UserEntity>,
  ) {
    super(_entityRepo, UserRepository.name);
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
      type: UserType.CLIENT,
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

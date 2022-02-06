import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService }  from 'src/shared/core/class/base.service';

import { UserPositionEntity } from '../entities/user-position.entity';
import { UserPositionRepository } from '../repositories/user-position.repository';
import { Result } from 'src/shared/core/class/result'
import { AppError } from 'src/shared/core/errors/AppError';
import { UserPositionErrors } from '../errors/user-position.errors';
import { DB_USER } from '../../../../data-access/availabe-data-access.providers';
import { DBUser } from '../../../../data-access/types/db-user.type';


@Injectable()
export class UserPositionService extends BaseEntityService<UserPositionEntity> {
  constructor(private readonly _userPositionRepo: UserPositionRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_userPositionRepo, UserPositionEntity.name, dbUser);
  }
  async create(entity: UserPositionEntity): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist({ name: { eq: entity.name } });
      console.log(exists);
      if (exists) {
        return Result.Fail(new UserPositionErrors.UserPositionFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();

    }catch(err){
      return Result.Fail( new AppError.UnexpectedError(err))

    }
  }

}

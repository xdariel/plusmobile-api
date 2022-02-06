import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { UserAreaEntity } from '../entities/user-area.entity';
import { UserAreaRepository } from '../repositories/user-area.repository';
import { Result } from 'src/shared/core/class/result';
import { AppError } from '../../../../../core/errors/AppError';
import { UserAreaErrors } from '../errors/user-area.errors';
import { DB_USER } from '../../../../data-access/availabe-data-access.providers';
import { DBUser } from '../../../../data-access/types/db-user.type';


@Injectable()
export class UserAreaEntityService extends BaseEntityService<UserAreaEntity> {
  constructor(private readonly _userAreaRepo: UserAreaRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_userAreaRepo, UserAreaEntity.name, dbUser);
  }

  async create(entity: UserAreaEntity): Promise<Result<void>> {

    try {
      const exists = await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new UserAreaErrors.UserAreaFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}

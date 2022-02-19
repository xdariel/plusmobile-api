import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { BanksEntity } from '../entities/banks.entity';
import { BanksRepository } from '../repositories/banks.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { BanksErrors } from '../errors/banks.errors';


@Injectable()
export class BanksEntityService extends BaseEntityService<BanksEntity> {
  constructor(private readonly _banksRepo: BanksRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_banksRepo, BanksEntity.name, dbUser);
  }

  async create(entity: BanksEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new BanksErrors.BanksFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }





}

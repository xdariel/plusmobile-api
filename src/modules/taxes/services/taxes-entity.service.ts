import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { TaxesEntity } from '../entities/taxes.entity';
import { TaxesRepository } from '../repositories/taxes.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { TaxesErrors } from '../errors/taxes.errors';


@Injectable()
export class TaxesEntityService extends BaseEntityService<TaxesEntity> {
  constructor(private readonly _taxesRepo: TaxesRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_taxesRepo, TaxesEntity.name, dbUser);
  }

 
  async create(entity: TaxesEntity): Promise<Result<void>> {

    try {
      if (entity.tax>100) {
        return Result.Fail(new TaxesErrors.TaxesFieldInvalidTax('tax', entity.tax.toString()));
      }

      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new TaxesErrors.TaxesFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}

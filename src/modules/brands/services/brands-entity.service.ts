import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { BrandsEntity } from '../entities/brands.entity';
import { BrandsRepository } from '../repositories/brands.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { BrandsErrors } from '../errors/brands.errors';


@Injectable()
export class BrandsEntityService extends BaseEntityService<BrandsEntity> {
  constructor(private readonly _brandsRepo: BrandsRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_brandsRepo, BrandsEntity.name, dbUser);
  }

  async create(entity: BrandsEntity): Promise<Result<void>> {

    try {

      const exists_order =await this.repo.exist({ order: { eq: entity.order } });

      if (exists_order) {
        return Result.Fail(new BrandsErrors.BrandsFieldUsed('order', entity.order.toString()));
      }
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new BrandsErrors.BrandsFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }




}

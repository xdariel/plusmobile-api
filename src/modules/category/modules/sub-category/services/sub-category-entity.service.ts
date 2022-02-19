import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { SubCategoryEntity } from '../entities/sub-category.entity';
import { SubCategoryRepository } from '../repositories/sub-category.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { SubCategoryErrors } from '../errors/sub-category.errors';


@Injectable()
export class SubCategoryEntityService extends BaseEntityService<SubCategoryEntity> {
  constructor(private readonly _subCategoryRepo: SubCategoryRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_subCategoryRepo, SubCategoryEntity.name, dbUser);
  }

  async create(entity: SubCategoryEntity): Promise<Result<void>> {

    try {

      const exists_order =await this.repo.exist({ order: { eq: entity.order } });

      if (exists_order) {
        return Result.Fail(new SubCategoryErrors.SubCategoryFieldUsed('order', entity.order.toString()));
      }
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new SubCategoryErrors.SubCategoryFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }




}

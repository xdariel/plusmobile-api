import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from '../repositories/category.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { CategoryErrors } from '../errors/category.errors';


@Injectable()
export class CategoryEntityService extends BaseEntityService<CategoryEntity> {
  constructor(private readonly _categoryRepo: CategoryRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_categoryRepo, CategoryEntity.name, dbUser);
  }



  async create(entity: CategoryEntity): Promise<Result<void>> {

    try {

      const exists_order =await this.repo.exist({ order: { eq: entity.order } });

      if (exists_order) {
        return Result.Fail(new CategoryErrors.CategoryFieldUsed('order', entity.order.toString()));
      }
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new CategoryErrors.CategoryFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}

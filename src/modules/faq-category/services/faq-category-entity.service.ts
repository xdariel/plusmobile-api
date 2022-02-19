import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { FaqCategoryEntity } from '../entities/faq-category.entity';
import { FaqCategoryRepository } from '../repositories/faq-category.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { FaqCategoryErrors } from '../errors/faq-category.errors';


@Injectable()
export class FaqCategoryEntityService extends BaseEntityService<FaqCategoryEntity> {
  constructor(private readonly _faqCategoryRepo: FaqCategoryRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_faqCategoryRepo, FaqCategoryEntity.name, dbUser);
  }

  async create(entity: FaqCategoryEntity): Promise<Result<void>> {

    try {
      const exists_name =await this.repo.exist({ name: { eq: entity.name } });

      if (exists_name) {
        return Result.Fail(new FaqCategoryErrors.FaqCategoryFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}

import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { FaqEntity } from '../entities/faq.entity';
import { FaqRepository } from '../repositories/faq.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { FaqErrors } from '../errors/faq.errors';


@Injectable()
export class FaqEntityService extends BaseEntityService<FaqEntity> {
  constructor(private readonly _faqRepo: FaqRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_faqRepo, FaqEntity.name, dbUser);
  }

  async create(entity: FaqEntity): Promise<Result<void>> {

    try {
      const exists_name =await this.repo.exist({ question: { eq: entity.question } });

      if (exists_name) {
        return Result.Fail(new FaqErrors.FaqFieldUsed('question', entity.question));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}

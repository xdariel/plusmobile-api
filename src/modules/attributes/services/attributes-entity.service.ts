import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { AttributesEntity } from '../entities/attributes.entity';
import { AttributesRepository } from '../repositories/attributes.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { AttributesErrors } from '../errors/attributes.errors';


@Injectable()
export class AttributesEntityService extends BaseEntityService<AttributesEntity> {
  constructor(private readonly _attributesRepo: AttributesRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_attributesRepo, AttributesEntity.name, dbUser);
  }


  async create(entity: AttributesEntity): Promise<Result<void>> {

    try {

      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new AttributesErrors.AttributesFieldUsed('name', entity.name));
      }

      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}

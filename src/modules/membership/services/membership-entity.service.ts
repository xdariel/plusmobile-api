import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { MembershipEntity } from '../entities/membership.entity';
import { MembershipRepository } from '../repositories/membership.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { MembershipErrors } from '../errors/membership.errors';


@Injectable()
export class MembershipEntityService extends BaseEntityService<MembershipEntity> {
  constructor(private readonly _membershipRepo: MembershipRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_membershipRepo, MembershipEntity.name, dbUser);
  }


  async create(entity: MembershipEntity): Promise<Result<void>> {

    try {

      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new MembershipErrors.MembershipFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}

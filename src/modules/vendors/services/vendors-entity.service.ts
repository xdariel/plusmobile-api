import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { VendorsEntity } from '../entities/vendors.entity';
import { VendorsRepository } from '../repositories/vendors.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { VendorsErrors } from '../errors/vendors.errors';


@Injectable()
export class VendorsEntityService extends BaseEntityService<VendorsEntity> {
  constructor(private readonly _vendorsRepo: VendorsRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_vendorsRepo, VendorsEntity.name, dbUser);
  }

  async create(entity: VendorsEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ nameCompany: { eq: entity.nameCompany } });
      if (exists) {
        return Result.Fail(new VendorsErrors.VendorsFieldUsed('nameCompany', entity.nameCompany));
      }
      if (exists) {
        return Result.Fail(new VendorsErrors.VendorsFieldUsed('user', entity.user));
      }
      if (entity.globalDistribution===true && entity.percentageValue>100) {
        return Result.Fail(new VendorsErrors.VendorsFieldInvalidValue('percentageValue', entity.percentageValue.toString()));
      }
      if (entity.globalDistribution===true && entity.netPercentageValue>100) {
        return Result.Fail(new VendorsErrors.VendorsFieldInvalidValue('netPercentageValue', entity.netPercentageValue.toString()));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
 
  }



}

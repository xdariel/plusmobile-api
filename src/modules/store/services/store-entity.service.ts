import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { StoreEntity } from '../entities/store.entity';
import { StoreRepository } from '../repositories/store.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';
import { StoreErrors } from '../errors/store.errors';


@Injectable()
export class StoreEntityService extends BaseEntityService<StoreEntity> {
  constructor(private readonly _storeRepo: StoreRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_storeRepo, StoreEntity.name, dbUser);
  }

  async create(entity: StoreEntity): Promise<Result<void>> {

    try {
      const count =await this.repo.count({ });
      if(count>0){
        entity.isRoot=false
      }else{
        entity.isRoot=true
      }
      const exists =await this.repo.exist({ vendors: { eq: entity.vendors } });

      if (exists) {
        return Result.Fail(new StoreErrors.StoreFieldUsed('vendors', entity.vendors));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}

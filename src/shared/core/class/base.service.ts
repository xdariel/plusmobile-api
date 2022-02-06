import { Identifier, IEntity } from 'src/shared/core/interfaces/IEntity';
import { IEntityService } from '../interfaces/IEntityService';
import { Result } from './result';
import { IncludesType, IRepository, IRepositoryFilter } from '../interfaces/IRepository';
import { IPaginatorParams } from '../interfaces/IPaginatorParams';
import { OrderByType } from '../interfaces/IOrderByType';
import { IPaginatedData } from '../interfaces/IPaginatedData';
import { AppError } from '../errors/AppError';
import { MongoModelBuild } from '../../modules/data-access/mongoose/base.respository';
import { DBUser } from '../../modules/data-access/types/db-user.type';


export abstract class BaseEntityService<E extends IEntity> implements IEntityService<E> {

  repo: IRepository<E, IRepositoryFilter<E>>;
  entityName: string;
  protected user: DBUser | undefined;


  constructor(repository: IRepository<E, IRepositoryFilter<E>>, entityName: string, authUser?: DBUser) {
    this.repo = repository;
    this.entityName = entityName;
    this.user = authUser;

  }


  passConnection2Repo(params: MongoModelBuild): Result<void> {
    try {
      this.repo.setConnection(params);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  async create(entity: E): Promise<Result<void>> {
    try {
      entity = this.user ? { ...entity, createdBy: this.user.id } : entity;
      await this.repo.save(entity);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async deleteById(id: Identifier): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist({ id: { eq: id } });
      if (!exists) {
        return Result.Fail(new AppError.EntityDoesNotExistError(this.entityName, String(id)));
      }

      await this.repo.dropById(id);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async updateMany(update: Partial<E>, where?: IRepositoryFilter<E>): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist(where);
      if (!exists) {
        return Result.Fail(new AppError.EntityConditionDoesNotShowResults(this.entityName));
      }
      update = this.user ? { ...update, updatedBy: this.user.id } : update;
      await this.repo.updateMany(update, where);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


  async deleteMany(where?: IRepositoryFilter<E>): Promise<Result<void>> {

    try {
      const count = await this.repo.count(where);
      if (count === 0) {
        return Result.Fail(new AppError.EntityConditionDoesNotShowResults(this.entityName));
      }

      await this.repo.deleteMany(where);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

  async deleteOne(where?: IRepositoryFilter<E>): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist(where);
      if (!exists) {
        return Result.Fail(new AppError.EntityConditionDoesNotShowResults(this.entityName));
      }
      await this.repo.deleteOne(where);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

  async findOne(where?: IRepositoryFilter<E>, orderBy?: OrderByType<E>, includes?: IncludesType<E>): Promise<Result<E>> {
    try {
      const exists = await this.repo.exist(where);
      if (!exists) {
        return Result.Fail(new AppError.EntityConditionDoesNotShowResults(this.entityName));
      }
      const entity = await this.repo.findOne(where, orderBy, includes);
      return Result.Ok(entity);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async getAllPaginated(paginator?: IPaginatorParams,
                        where?: IRepositoryFilter<E>,
                        orderBy?: OrderByType<E>,
                        includes?: IncludesType<E>): Promise<Result<IPaginatedData<E>>> {

    try {
      const paginated = await this.repo.getAllPaginated(paginator, where, orderBy, includes);
      return Result.Ok(paginated);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

  async updateById(id: Identifier, update: Partial<E>): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist({ id: { eq: id } });
      if (!exists) {
        return Result.Fail(new AppError.EntityDoesNotExistError(this.entityName, String(id)));
      }
      update = this.user ? { ...update, updatedBy: this.user.id } : update;
      await this.repo.updateById(id, update);
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async getAll(where?: IRepositoryFilter<E>,
               orderBy?: OrderByType<E>,
               includes?: IncludesType<E>,
               bashSize?: number): Promise<Result<Array<E>>> {

    try {

      const iterable = this.repo.getAllIterable(where, orderBy, includes, bashSize);
      const entities: Array<E> = new Array<E>();
      for await (const it of iterable) {
        if (it.isFailure) {
          return Result.Fail(it.unwrapError());
        }
        entities.push(it.unwrap());
      }
      return Result.Ok(entities);

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async count(where?: IRepositoryFilter<E>): Promise<Result<number>> {
    try {
      const foundDocuments = await this.repo.count(where);
      return Result.Ok(foundDocuments);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


}


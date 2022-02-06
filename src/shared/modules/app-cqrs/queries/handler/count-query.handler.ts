import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';
import { CountQuery } from '../impl/count.query';

@QueryHandler(CountQuery)
export class CountQueryHandler<E extends IEntity> implements IQueryHandler<CountQuery<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string,
  ) {
  }

  async execute({ request, contextId, connection }: CountQuery<E>): Promise<Result<number>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    if (connection) {
      service.passConnection2Repo(connection);
    }
    return service.count(request?.where);
  }
}

import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetNodesQuery } from '../impl/get-nodes.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from 'src/shared/core/class/result';
import { IMultiLevelNode } from '../../../interfaces/IMultiLevelNode';
import { AppMultiLevelService } from '../../../services/app-multi-level.service';


@QueryHandler(GetNodesQuery)
export class GetNodesQueryHandler implements IQueryHandler<GetNodesQuery> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

  }

  async execute({ request: { userId }, contextId }: GetNodesQuery): Promise<Result<Array<IMultiLevelNode>>> {
    const service = await this._moduleRef.resolve(AppMultiLevelService, contextId as ContextId);
    return service.getNodes(userId);
  }
}


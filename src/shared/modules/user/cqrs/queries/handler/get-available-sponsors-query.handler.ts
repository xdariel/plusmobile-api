import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { UserService } from '../../../services/user.service';
import { GetAvailableSponsorsQuery } from '../impl/get-available-sponsors.query';


@QueryHandler(GetAvailableSponsorsQuery)
export class GetAvailableSponsorsQueryHandler implements IQueryHandler<GetAvailableSponsorsQuery> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

  }

  async execute({ request: { userId }, contextId }: GetAvailableSponsorsQuery): Promise<Result<Array<UserEntity>>> {
    const service = await this._moduleRef.resolve(UserService, contextId as any);
    return service.getAvailableSponsors(userId);
  }

}

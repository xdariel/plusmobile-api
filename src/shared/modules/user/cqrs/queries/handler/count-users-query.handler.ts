import { QueryHandler } from '@nestjs/cqrs';
import { CountUsersQuery } from '../impl/count-users.query';
import { ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';
import { UserService } from '../../../services/user.service';


@QueryHandler(CountUsersQuery)
export class CountUsersQueryHandler extends CountQueryHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserService.name)
  }

}

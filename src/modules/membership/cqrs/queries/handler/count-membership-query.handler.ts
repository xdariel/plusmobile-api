import { QueryHandler } from '@nestjs/cqrs';
import { CountMembershipQuery } from '../impl/count-membership.query';

import { ModuleRef } from '@nestjs/core';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';
import { CountQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/count-query.handler';

@QueryHandler(CountMembershipQuery)
export class CountMembershipQueryHandler extends CountQueryHandler<MembershipEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MembershipEntityService.name)
  }

}

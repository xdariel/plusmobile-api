import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';

import { AdditionalInfoResponse } from '../dto/responses/additional-info.response';



@Resolver(() => AdditionalInfoResponse)
export class AdditionalInfoResolver extends BaseResolver {
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

 

}



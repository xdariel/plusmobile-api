import { ID, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';
import { MultiLevelInfoResponse } from '../dto/responses/multilevel-info.response';
import { GetUserByRefCodeQuery } from '../../cqrs/queries/impl/get-user-by-ref-code.query';
import { UserEntity } from '../../entities/user.entity';


@Resolver(() => MultiLevelInfoResponse)
export class MultiLevelInfoResolver extends BaseResolver {
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @ResolveField(() => ID, { nullable: true })
  async sponsorId(@Parent() parent?: MultiLevelInfoResponse): Promise<string | null> {
    if (parent?.sponsorCode) {
      const user = await this._cqrsBus.execQuery<UserEntity>(new GetUserByRefCodeQuery({
        refCode: parent.sponsorCode,
      }));

      return user?.id;
    }
  }

}



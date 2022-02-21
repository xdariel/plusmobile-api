import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GetNodesInput } from '../dto/inputs/get-nodes.input';
import { MultiLevelNodeResponse } from '../dto/responses/multi-level-node.response';

import { MultiLevelMapper } from '../../mapper/multi-level.mapper';

import { Inject, UseGuards } from '@nestjs/common';
import { GetNodesQuery } from '../../cqrs/queries/impl/get-nodes.query';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';
import { IMultiLevelNode } from '../../interfaces/IMultiLevelNode';
import { CloudFileResponse } from '../../../../shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from '../../../../shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from '../../../../shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => MultiLevelNodeResponse)
export class MultiLevelResolver extends BaseResolver {
  constructor(
    private readonly _multiLevelMapper: MultiLevelMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }


  @UseGuards(GqlAuthGuard)
  @Query(() => [MultiLevelNodeResponse])
  async getNodes(
    @Args('input', { nullable: true }) input: GetNodesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MultiLevelNodeResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<IMultiLevelNode>>>(new GetNodesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [MultiLevelNodeResponse])
  async getMyNodes(
    @CurrentUser() { userId }: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MultiLevelNodeResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<IMultiLevelNode>>>(new GetNodesQuery({ userId }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap();
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async photoFile(@Parent() parent?: MultiLevelNodeResponse): Promise<CloudFileResponse> {
    if (parent?.photoFile) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.photoFile.id },
        },
      }));
      if (fileOrErr.isFailure) {
        return null;
      }
      const { id, key, url } = fileOrErr.unwrap();

      return {
        id,
        key,
        url,
      };
    }
  }


}

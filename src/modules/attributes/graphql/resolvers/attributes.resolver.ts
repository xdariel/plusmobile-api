import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateAttributesInput } from '../dto/inputs/create-attributes.input';
import { AttributesResponse } from '../dto/responses/attributes.response';
import { GetAllAttributesInput } from '../dto/inputs/get-all-attributes.input';
import { DeleteAttributesInput } from '../dto/inputs/delete-attributes.input';
import { CreateAttributesCommand } from '../../cqrs/commands/impl/create-attributes.command';
import { DeleteAttributesCommand } from '../../cqrs/commands/impl/delete-attributes.command';
import { GetAllAttributesQuery } from '../../cqrs/queries/impl/get-all-attributes.query';
import { AttributesMapper } from '../../mapper/attributes.mapper';
import { UpdateAttributesInput } from '../dto/inputs/update-attributes.input';
import { UpdateAttributesCommand } from '../../cqrs/commands/impl/update-attributes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedAttributesInput } from '../dto/inputs/get-paginated-attributes.input';
import { PaginatedAttributesResponse } from '../dto/responses/paginated-attributes.response';
import { GetPaginatedAttributesQuery } from '../../cqrs/queries/impl/get-paginated-attributes.query';
import { GetOneAttributesInput } from '../dto/inputs/get-one-attributes.input';
import { GetOneAttributesQuery } from '../../cqrs/queries/impl/get-one-attributes.query';
import { DeleteManyAttributesInput } from '../dto/inputs/delete-many-attributes.input';
import { DeleteManyAttributesCommand } from '../../cqrs/commands/impl/delete-many-attributes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { AttributesEntity } from '../../entities/attributes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => AttributesResponse)
export class AttributesResolver extends BaseResolver {
  constructor(
    private readonly _attributesMapper: AttributesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createAttributes(
    @Args('input') input: CreateAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateAttributesCommand(
      this._attributesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateAttributes(
    @Args('input') { update, entityId }: UpdateAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateAttributesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteAttributes(
    @Args('input') { entityId }: DeleteAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteAttributesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyAttributes(
    @Args('input') input: DeleteManyAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyAttributesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[AttributesResponse])
  async getAllAttributes(
    @Args('input', { nullable: true }) input: GetAllAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AttributesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<AttributesEntity>>>(new GetAllAttributesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._attributesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => AttributesResponse, { nullable: true })
  async getOneAttributes(
    @Args('input', { nullable: true }) input: GetOneAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<AttributesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<AttributesEntity>>(new GetOneAttributesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._attributesMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedAttributesResponse, { nullable: true })
  async getPaginatedAttributes(
    @Args('input', { nullable: true }) input: GetPaginatedAttributesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedAttributesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<AttributesEntity>>>(new GetPaginatedAttributesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._attributesMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [AttributesResponse])
  async getAllAttributesOwn(
    @Args('input', { nullable: true }) input: GetAllAttributesInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AttributesResponse>> {
    return this.getAllAttributes({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['ATTRIBUTES'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedAttributesResponse, { nullable: true })
  async getPaginatedAttributesOwn(
    @Args('input', { nullable: true }) input: GetPaginatedAttributesInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedAttributesResponse> {
    return this.getPaginatedAttributes({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: AttributesResponse): Promise<SolvedEntityResponse> {
    if (parent?.createdBy) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.createdBy.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }
      const user = userOrErr.unwrap();
      return {
        id: user.id,
        entityName: UserEntity.name,
        identifier: `${user.firstname} ${user?.lastname}`,
        fields: [
          {
            field: 'username',
            value: user?.username,
          },
        ],
      };
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async updatedBy(@Parent() parent?: AttributesResponse): Promise<SolvedEntityResponse> {
    if (parent?.updatedBy) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.updatedBy.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }
      const user = userOrErr.unwrap();
      return {
        id: user.id,
        entityName: UserEntity.name,
        identifier: `${user.firstname} ${user?.lastname}`,
        fields: [
          {
            field: 'username',
            value: user?.username,
          },
        ],
      };
    }
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async image(@Parent() parent?: AttributesResponse): Promise<CloudFileResponse> {
    if (parent?.image) {
      const logoOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.image.id },
        },
      }));
      if (logoOrErr.isFailure) {
        return null;
      }
      const file = logoOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }


}

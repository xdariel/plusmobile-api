import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateSupportTicketInput } from '../dto/inputs/create-support-ticket.input';
import { SupportTicketResponse } from '../dto/responses/support-ticket.response';
import { GetAllSupportTicketInput } from '../dto/inputs/get-all-support-ticket.input';
import { DeleteSupportTicketInput } from '../dto/inputs/delete-support-ticket.input';
import { CreateSupportTicketCommand } from '../../cqrs/commands/impl/create-support-ticket.command';
import { DeleteSupportTicketCommand } from '../../cqrs/commands/impl/delete-support-ticket.command';
import { GetAllSupportTicketQuery } from '../../cqrs/queries/impl/get-all-support-ticket.query';
import { SupportTicketMapper } from '../../mapper/support-ticket.mapper';
import { UpdateSupportTicketInput } from '../dto/inputs/update-support-ticket.input';
import { UpdateSupportTicketCommand } from '../../cqrs/commands/impl/update-support-ticket.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedSupportTicketInput } from '../dto/inputs/get-paginated-support-ticket.input';
import { PaginatedSupportTicketResponse } from '../dto/responses/paginated-support-ticket.response';
import { GetPaginatedSupportTicketQuery } from '../../cqrs/queries/impl/get-paginated-support-ticket.query';
import { GetOneSupportTicketInput } from '../dto/inputs/get-one-support-ticket.input';
import { GetOneSupportTicketQuery } from '../../cqrs/queries/impl/get-one-support-ticket.query';
import { DeleteManySupportTicketInput } from '../dto/inputs/delete-many-support-ticket.input';
import { DeleteManySupportTicketCommand } from '../../cqrs/commands/impl/delete-many-support-ticket.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { SupportTicketEntity } from '../../entities/support-ticket.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => SupportTicketResponse)
export class SupportTicketResolver extends BaseResolver {
  constructor(
    private readonly _supportTicketMapper: SupportTicketMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createSupportTicket(
    @Args('input') input: CreateSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateSupportTicketCommand(
      this._supportTicketMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateSupportTicket(
    @Args('input') { update, entityId }: UpdateSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateSupportTicketCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteSupportTicket(
    @Args('input') { entityId }: DeleteSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteSupportTicketCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManySupportTicket(
    @Args('input') input: DeleteManySupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManySupportTicketCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[SupportTicketResponse])
  async getAllSupportTicket(
    @Args('input', { nullable: true }) input: GetAllSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SupportTicketResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<SupportTicketEntity>>>(new GetAllSupportTicketQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._supportTicketMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => SupportTicketResponse, { nullable: true })
  async getOneSupportTicket(
    @Args('input', { nullable: true }) input: GetOneSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<SupportTicketResponse> {
    const resp = await this._cqrsBus.execQuery<Result<SupportTicketEntity>>(new GetOneSupportTicketQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._supportTicketMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedSupportTicketResponse, { nullable: true })
  async getPaginatedSupportTicket(
    @Args('input', { nullable: true }) input: GetPaginatedSupportTicketInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedSupportTicketResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<SupportTicketEntity>>>(new GetPaginatedSupportTicketQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._supportTicketMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [SupportTicketResponse])
  async getAllSupportTicketOwn(
    @Args('input', { nullable: true }) input: GetAllSupportTicketInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SupportTicketResponse>> {
    return this.getAllSupportTicket({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['SUPPORT_TICKET'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedSupportTicketResponse, { nullable: true })
  async getPaginatedSupportTicketOwn(
    @Args('input', { nullable: true }) input: GetPaginatedSupportTicketInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedSupportTicketResponse> {
    return this.getPaginatedSupportTicket({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: SupportTicketResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: SupportTicketResponse): Promise<SolvedEntityResponse> {
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



}

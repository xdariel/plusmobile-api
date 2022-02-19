import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDiscountCouponInput } from '../dto/inputs/create-discount-coupon.input';
import { DiscountCouponResponse } from '../dto/responses/discount-coupon.response';
import { GetAllDiscountCouponInput } from '../dto/inputs/get-all-discount-coupon.input';
import { DeleteDiscountCouponInput } from '../dto/inputs/delete-discount-coupon.input';
import { CreateDiscountCouponCommand } from '../../cqrs/commands/impl/create-discount-coupon.command';
import { DeleteDiscountCouponCommand } from '../../cqrs/commands/impl/delete-discount-coupon.command';
import { GetAllDiscountCouponQuery } from '../../cqrs/queries/impl/get-all-discount-coupon.query';
import { DiscountCouponMapper } from '../../mapper/discount-coupon.mapper';
import { UpdateDiscountCouponInput } from '../dto/inputs/update-discount-coupon.input';
import { UpdateDiscountCouponCommand } from '../../cqrs/commands/impl/update-discount-coupon.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDiscountCouponInput } from '../dto/inputs/get-paginated-discount-coupon.input';
import { PaginatedDiscountCouponResponse } from '../dto/responses/paginated-discount-coupon.response';
import { GetPaginatedDiscountCouponQuery } from '../../cqrs/queries/impl/get-paginated-discount-coupon.query';
import { GetOneDiscountCouponInput } from '../dto/inputs/get-one-discount-coupon.input';
import { GetOneDiscountCouponQuery } from '../../cqrs/queries/impl/get-one-discount-coupon.query';
import { DeleteManyDiscountCouponInput } from '../dto/inputs/delete-many-discount-coupon.input';
import { DeleteManyDiscountCouponCommand } from '../../cqrs/commands/impl/delete-many-discount-coupon.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DiscountCouponEntity } from '../../entities/discount-coupon.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => DiscountCouponResponse)
export class DiscountCouponResolver extends BaseResolver {
  constructor(
    private readonly _discountCouponMapper: DiscountCouponMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDiscountCoupon(
    @Args('input') input: CreateDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDiscountCouponCommand(
      this._discountCouponMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDiscountCoupon(
    @Args('input') { update, entityId }: UpdateDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDiscountCouponCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDiscountCoupon(
    @Args('input') { entityId }: DeleteDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDiscountCouponCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.DELETE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDiscountCoupon(
    @Args('input') input: DeleteManyDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDiscountCouponCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DiscountCouponResponse])
  async getAllDiscountCoupon(
    @Args('input', { nullable: true }) input: GetAllDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DiscountCouponResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DiscountCouponEntity>>>(new GetAllDiscountCouponQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._discountCouponMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => DiscountCouponResponse, { nullable: true })
  async getOneDiscountCoupon(
    @Args('input', { nullable: true }) input: GetOneDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DiscountCouponResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DiscountCouponEntity>>(new GetOneDiscountCouponQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._discountCouponMapper.persistent2Dto(resp.unwrap());
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDiscountCouponResponse, { nullable: true })
  async getPaginatedDiscountCoupon(
    @Args('input', { nullable: true }) input: GetPaginatedDiscountCouponInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDiscountCouponResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DiscountCouponEntity>>>(new GetPaginatedDiscountCouponQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._discountCouponMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.GET_ALL_OWN })
  @Query(() => [DiscountCouponResponse])
  async getAllDiscountCouponOwn(
    @Args('input', { nullable: true }) input: GetAllDiscountCouponInput,
    @CurrentUser() user?: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DiscountCouponResponse>> {
    return this.getAllDiscountCoupon({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    }, lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['DISCOUNT_COUPON'], action: ACTION_LIST.GET_PAGINATED_OWN })
  @Query(() => PaginatedDiscountCouponResponse, { nullable: true })
  async getPaginatedDiscountCouponOwn(
    @Args('input', { nullable: true }) input: GetPaginatedDiscountCouponInput,
    @CurrentLanguage() lang?: string,
    @CurrentUser() user?: AuthUser,
  ): Promise<PaginatedDiscountCouponResponse> {
    return this.getPaginatedDiscountCoupon({
      ...input,
      where: { ...input.where, createdBy: { eq: user.userId } },
    });
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async createdBy(@Parent() parent?: DiscountCouponResponse): Promise<SolvedEntityResponse> {
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
  async updatedBy(@Parent() parent?: DiscountCouponResponse): Promise<SolvedEntityResponse> {
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

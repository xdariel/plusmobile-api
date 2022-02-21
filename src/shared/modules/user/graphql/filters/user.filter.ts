import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { IEntityFilter } from '../../../data-access/mongoose/types/filterable-fields.type';
import { UserEntity } from '../../entities/user.entity';
import { ID, ObjectType } from '@nestjs/graphql';
import { ProfileFilter, ProfileFilterInput } from './profile.filter';
import { Filter } from '@nestjs-query/core';

@ObjectType()
export class UserFilter implements IEntityFilter<UserEntity> {
  @FilterableField(() => ID, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) email?: string;
  @FilterableField(() => String, { nullable: true }) username?: string;
  @FilterableField(() => Boolean, { nullable: true }) verified?: boolean;
  @FilterableField(() => String, { nullable: true }) firstname?: string;
  @FilterableField(() => String, { nullable: true }) type?: string;
  @FilterableField(() => Boolean, { nullable: true }) isActive?: boolean;
  @FilterableField(() => Boolean, { nullable: true }) isAdmin?: boolean;
  @FilterableField(() => Date, { nullable: true }) lastLogin?: Date;
  @FilterableField(() => String, { nullable: true }) lastname?: string;
  @FilterableField(() => ProfileFilterInput, { nullable: true }) profile?: Filter<ProfileFilter>;

  @FilterableField(() => ID, { nullable: true }) createdBy?: string;
  @FilterableField(() => ID, { nullable: true }) updatedBy?: string;
  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;
}


export const UserFilterInput = FilterType(UserFilter);

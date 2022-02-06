import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { GetUserByRefCodeQuery } from '../impl/get-user-by-ref-code.query';
import { UserRepository } from '../../../repositories/user.repository';


@QueryHandler(GetUserByRefCodeQuery)
export class GetUserByRefCodeQueryHandler implements IQueryHandler<GetUserByRefCodeQuery>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request:{refCode}, contextId }: GetUserByRefCodeQuery): Promise<UserEntity | null> {
    const repo = await this._moduleRef.resolve(UserRepository, contextId as any )
    return repo.getUserByRefCode(refCode);
  }

}

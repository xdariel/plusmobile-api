import { Injectable } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';
import { UserRepository } from 'src/shared/modules/user/repositories/user.repository';
import { IMultilevelService } from '../interfaces/IMultilevelService';
import { UserEntity, UserType } from 'src/shared/modules/user/entities/user.entity';
import { UserErrors } from 'src/shared/modules/user/errors/user.errors';
import { AppError } from 'src/shared/core/errors/AppError';
import { IMultiLevelNode } from '../interfaces/IMultiLevelNode';
import { MultiLevelMapper } from '../mapper/multi-level.mapper';


@Injectable()
export class AppMultiLevelService implements IMultilevelService {
  constructor(private readonly _userRepo: UserRepository,
              private readonly _multiLevelMapper: MultiLevelMapper) {
  }


  async getNodes(userId: string): Promise<Result<Array<IMultiLevelNode>>> {

    try {
      const user = await this._userRepo.findOne({ id: { eq: userId } });
      if (!user) {
        return Result.Fail(new UserErrors.UserWithIdDoesntExist(userId));
      }

      if (user.type !== UserType.CLIENT || !user?.multiLevelInfo || !user?.multiLevelInfo?.refCode) {
        return Result.Ok([]);
      }

      const userNodes: Map<string, UserEntity> = new Map<string, UserEntity>();

      await this._nodes(user, userNodes);
      return Result.Ok(Array.from(userNodes.values()).map(this._multiLevelMapper.persistentUser2Node));

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  private async _nodes(root: UserEntity, nodes: Map<string, UserEntity>) {
    nodes.set(root.id, root);
    const directs = await this._userRepo.getMyDirectUsers(root.multiLevelInfo.refCode);
    for (const direct of directs) {
      await this._nodes(direct, nodes);
    }
  }

}

import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../shared/modules/user/entities/user.entity';
import { IMultiLevelNode } from '../interfaces/IMultiLevelNode';

@Injectable()
export class MultiLevelMapper {

  persistentUser2Node(user: UserEntity): IMultiLevelNode {
    return {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      userId: user.id,
      username: user.username,
      refCode: user.multiLevelInfo.refCode,
      sponsorCode: user.multiLevelInfo.sponsorCode,
      photoFile: user.avatarFile ? { id: user.avatarFile } : undefined,
    };
  }

}

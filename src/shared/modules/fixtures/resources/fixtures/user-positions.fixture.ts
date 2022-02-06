import { IFixture } from '../../interfaces/IFixture';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';
import { RoleEntity, RoleFeature } from '../../../user/modules/role/entities/role.entity';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { UserAreaEntity, UserAreaFeature } from '../../../user/modules/user-area/entities/user-area.entity';
import {
  UserPositionEntity,
  UserPositionFeature,
} from '../../../user/modules/user-position/entities/user-position.entity';


export const userPositionFixture: IFixture<UserPositionEntity, ModelDefinition> = {
  target: 'both',
  feature: UserPositionFeature,
  entities: [
    {
      id: new UniqueEntityID().toString(),
      name: 'Position 1',
      description: 'Position 1 Description',
      isActive: true
    },

    {
      id: new UniqueEntityID().toString(),
      name: 'Position 2',
      description: 'Position 2 Description',
      isActive: true
    }

  ],
};
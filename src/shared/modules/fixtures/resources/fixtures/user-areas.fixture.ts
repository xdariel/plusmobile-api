import { IFixture } from '../../interfaces/IFixture';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';
import { RoleEntity, RoleFeature } from '../../../user/modules/role/entities/role.entity';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { UserAreaEntity, UserAreaFeature } from '../../../user/modules/user-area/entities/user-area.entity';


export const userAreaFixture: IFixture<UserAreaEntity, ModelDefinition> = {
  target: 'both',
  feature: UserAreaFeature,
  entities: [
    {
      id: new UniqueEntityID().toString(),
      name: 'Area 1',
      description: 'Area 1 Description',
      isActive: true
    },

    {
      id: new UniqueEntityID().toString(),
      name: 'Area 2',
      description: 'Area 2 Description',
      isActive: true
    }

  ],
};
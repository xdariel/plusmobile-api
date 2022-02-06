import { UserEntity } from '../../../entities/user.entity';
import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProfileEntity } from '../../../entities/schemas/profile.schema';
import { AdditionalInfoEntity } from '../../../entities/schemas/additional-info.schema';
import { MultiLevelInfo } from '../../../entities/schemas/multilevel-info.schema';

type PartialUser = Partial<Omit<UserEntity, 'profile' | 'additionalInfo' | 'multiLevelInfo'>> & {
  profile?: Partial<ProfileEntity>
  additionalInfo?: Partial<AdditionalInfoEntity>
  multiLevelInfo?: Partial<MultiLevelInfo>
}

export class UpdateUserCommand extends UpdateCommand<UserEntity> {
  constructor(public request: { entityId: string, update: PartialUser }) {
    super({ entityId: request.entityId, update: request.update });
  }
}

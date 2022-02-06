import { CountDto } from 'src/shared/dto/count.dto';
import { UserEntity } from '../../../entities/user.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';

export class CountUsersQuery extends CountQuery<UserEntity>{
  constructor(public request: CountDto<UserEntity>) {
    super(request)
  }
}
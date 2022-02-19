import { MembershipEntity } from '../../../entities/membership.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountMembershipQuery extends CountQuery<MembershipEntity>{
  constructor(public request: CountDto<MembershipEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

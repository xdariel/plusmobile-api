import { AttributesEntity } from '../../../entities/attributes.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountAttributesQuery extends CountQuery<AttributesEntity>{
  constructor(public request: CountDto<AttributesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

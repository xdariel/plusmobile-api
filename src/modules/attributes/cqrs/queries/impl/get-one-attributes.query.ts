import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneAttributesQuery extends GetOneQuery<AttributesEntity> {
  constructor(public request: GetOneDto<AttributesEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

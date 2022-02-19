import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllAttributesQuery extends GetAllQuery<AttributesEntity>{
  constructor(public request: GetAllDto<AttributesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

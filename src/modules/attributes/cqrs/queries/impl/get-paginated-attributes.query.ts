import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { AttributesEntity } from '../../../entities/attributes.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedAttributesQuery extends GetPaginatedQuery<AttributesEntity>{
  constructor(public request: GetPaginatedDto<AttributesEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

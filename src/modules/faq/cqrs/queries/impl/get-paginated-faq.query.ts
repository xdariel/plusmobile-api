import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FaqEntity } from '../../../entities/faq.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFaqQuery extends GetPaginatedQuery<FaqEntity>{
  constructor(public request: GetPaginatedDto<FaqEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

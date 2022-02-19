import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FaqEntity } from '../../../entities/faq.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFaqQuery extends GetOneQuery<FaqEntity> {
  constructor(public request: GetOneDto<FaqEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

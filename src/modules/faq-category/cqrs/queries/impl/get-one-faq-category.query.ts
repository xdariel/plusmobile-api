import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFaqCategoryQuery extends GetOneQuery<FaqCategoryEntity> {
  constructor(public request: GetOneDto<FaqCategoryEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

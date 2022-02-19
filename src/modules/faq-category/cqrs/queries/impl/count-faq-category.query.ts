import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountFaqCategoryQuery extends CountQuery<FaqCategoryEntity>{
  constructor(public request: CountDto<FaqCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

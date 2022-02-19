import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FaqCategoryEntity } from '../../../entities/faq-category.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFaqCategoryQuery extends GetAllQuery<FaqCategoryEntity>{
  constructor(public request: GetAllDto<FaqCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

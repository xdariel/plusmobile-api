import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountSubCategoryQuery extends CountQuery<SubCategoryEntity>{
  constructor(public request: CountDto<SubCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

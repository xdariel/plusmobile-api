import { CategoryEntity } from '../../../entities/category.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountCategoryQuery extends CountQuery<CategoryEntity>{
  constructor(public request: CountDto<CategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { CategoryEntity } from '../../../entities/category.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllCategoryQuery extends GetAllQuery<CategoryEntity>{
  constructor(public request: GetAllDto<CategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

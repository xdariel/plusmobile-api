import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneSubCategoryQuery extends GetOneQuery<SubCategoryEntity> {
  constructor(public request: GetOneDto<SubCategoryEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

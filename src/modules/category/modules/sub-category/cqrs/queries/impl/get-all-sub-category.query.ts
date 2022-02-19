import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { SubCategoryEntity } from '../../../entities/sub-category.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllSubCategoryQuery extends GetAllQuery<SubCategoryEntity>{
  constructor(public request: GetAllDto<SubCategoryEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

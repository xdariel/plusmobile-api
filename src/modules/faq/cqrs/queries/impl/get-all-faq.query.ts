import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FaqEntity } from '../../../entities/faq.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFaqQuery extends GetAllQuery<FaqEntity>{
  constructor(public request: GetAllDto<FaqEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

import { FaqEntity } from '../../../entities/faq.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountFaqQuery extends CountQuery<FaqEntity>{
  constructor(public request: CountDto<FaqEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

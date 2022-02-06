import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class Count__name__Query extends CountQuery<__name__Entity>{
  constructor(public request: CountDto<__name__Entity>, public connection?:unknown) {
    super(request, connection)
  }
}

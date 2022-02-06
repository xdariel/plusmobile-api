import { IEntity } from '../../../../core/interfaces/IEntity';
import { AppQuery } from '../../base/AppQuery';
import { CountDto } from 'src/shared/dto/count.dto';


export class CountQuery<E extends IEntity> extends  AppQuery {
  constructor(public request: CountDto<E>, public connection?: unknown) {
    super()
  }
}

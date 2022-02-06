import { AppCommand } from '../../base/AppCommand';
import { IEntity } from 'src/shared/core/interfaces/IEntity';
import { GetOneDto } from '../../../../dto/get-one.dto';


export class UpdateManyCommand<E extends IEntity> extends AppCommand {
  constructor(public request: { filter?: GetOneDto<E>, update: Partial<E>}, public connection?: unknown) {
    super();
  }
}

import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { BrandsEntity } from '../../../entities/brands.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyBrandsCommand extends DeleteManyCommand<BrandsEntity>{
  constructor(public request: GetOneDto<BrandsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

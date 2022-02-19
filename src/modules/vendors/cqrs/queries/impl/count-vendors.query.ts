import { VendorsEntity } from '../../../entities/vendors.entity';
import { CountQuery } from 'src/shared/modules/app-cqrs/queries/impl/count.query';
import { CountDto } from 'src/shared/dto/count.dto';

export class CountVendorsQuery extends CountQuery<VendorsEntity>{
  constructor(public request: CountDto<VendorsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

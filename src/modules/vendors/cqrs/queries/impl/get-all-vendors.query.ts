import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllVendorsQuery extends GetAllQuery<VendorsEntity>{
  constructor(public request: GetAllDto<VendorsEntity>, public connection?:unknown) {
    super(request, connection)
  }
}

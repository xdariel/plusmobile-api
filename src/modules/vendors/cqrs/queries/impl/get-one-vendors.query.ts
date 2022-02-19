import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { VendorsEntity } from '../../../entities/vendors.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneVendorsQuery extends GetOneQuery<VendorsEntity> {
  constructor(public request: GetOneDto<VendorsEntity>, public connection?: unknown) {
    super(request, connection);
  }
}

import { CreateVendorsCommandHandler } from './handler/create-vendors-command.handler';
import { DeleteVendorsCommandHandler } from './handler/delete-vendors-command.handler';
import { UpdateVendorsCommandHandler } from './handler/update-vendors-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyVendorsCommandHandler } from './handler/delete-many-vendors-command.handler';

export const VendorsCommandHandlers: Array<Provider> = [
  CreateVendorsCommandHandler,
  DeleteVendorsCommandHandler,
  UpdateVendorsCommandHandler,
  DeleteManyVendorsCommandHandler
];

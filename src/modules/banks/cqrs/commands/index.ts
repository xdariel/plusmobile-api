import { CreateBanksCommandHandler } from './handler/create-banks-command.handler';
import { DeleteBanksCommandHandler } from './handler/delete-banks-command.handler';
import { UpdateBanksCommandHandler } from './handler/update-banks-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyBanksCommandHandler } from './handler/delete-many-banks-command.handler';

export const BanksCommandHandlers: Array<Provider> = [
  CreateBanksCommandHandler,
  DeleteBanksCommandHandler,
  UpdateBanksCommandHandler,
  DeleteManyBanksCommandHandler
];

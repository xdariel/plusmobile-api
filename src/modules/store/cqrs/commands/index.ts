import { CreateStoreCommandHandler } from './handler/create-store-command.handler';
import { DeleteStoreCommandHandler } from './handler/delete-store-command.handler';
import { UpdateStoreCommandHandler } from './handler/update-store-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyStoreCommandHandler } from './handler/delete-many-store-command.handler';

export const StoreCommandHandlers: Array<Provider> = [
  CreateStoreCommandHandler,
  DeleteStoreCommandHandler,
  UpdateStoreCommandHandler,
  DeleteManyStoreCommandHandler
];

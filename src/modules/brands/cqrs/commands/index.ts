import { CreateBrandsCommandHandler } from './handler/create-brands-command.handler';
import { DeleteBrandsCommandHandler } from './handler/delete-brands-command.handler';
import { UpdateBrandsCommandHandler } from './handler/update-brands-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyBrandsCommandHandler } from './handler/delete-many-brands-command.handler';

export const BrandsCommandHandlers: Array<Provider> = [
  CreateBrandsCommandHandler,
  DeleteBrandsCommandHandler,
  UpdateBrandsCommandHandler,
  DeleteManyBrandsCommandHandler
];

import { CreateAttributesCommandHandler } from './handler/create-attributes-command.handler';
import { DeleteAttributesCommandHandler } from './handler/delete-attributes-command.handler';
import { UpdateAttributesCommandHandler } from './handler/update-attributes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyAttributesCommandHandler } from './handler/delete-many-attributes-command.handler';

export const AttributesCommandHandlers: Array<Provider> = [
  CreateAttributesCommandHandler,
  DeleteAttributesCommandHandler,
  UpdateAttributesCommandHandler,
  DeleteManyAttributesCommandHandler
];

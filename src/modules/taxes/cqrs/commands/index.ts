import { CreateTaxesCommandHandler } from './handler/create-taxes-command.handler';
import { DeleteTaxesCommandHandler } from './handler/delete-taxes-command.handler';
import { UpdateTaxesCommandHandler } from './handler/update-taxes-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyTaxesCommandHandler } from './handler/delete-many-taxes-command.handler';

export const TaxesCommandHandlers: Array<Provider> = [
  CreateTaxesCommandHandler,
  DeleteTaxesCommandHandler,
  UpdateTaxesCommandHandler,
  DeleteManyTaxesCommandHandler
];

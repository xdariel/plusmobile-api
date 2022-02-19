import { DeleteCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete.command';

export class DeleteSubCategoryCommand extends DeleteCommand{
  constructor(public entityId: string, public connection?:unknown) {
    super(entityId, connection)
  }
}

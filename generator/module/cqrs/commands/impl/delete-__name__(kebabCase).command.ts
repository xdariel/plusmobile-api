import { DeleteCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete.command';

export class Delete__name__Command extends DeleteCommand{
  constructor(public entityId: string, public connection?:unknown) {
    super(entityId, connection)
  }
}

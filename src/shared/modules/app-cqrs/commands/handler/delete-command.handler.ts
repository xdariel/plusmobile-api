import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { DeleteCommand } from '../impl/delete.command';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';

@CommandHandler(DeleteCommand)
export class DeleteCommandHandler<E extends IEntity> implements ICommandHandler<DeleteCommand> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string
  ) {
  }

  async execute({ entityId , contextId, connection }: DeleteCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    if (connection) {
      service.passConnection2Repo(connection);
    }
    return service.deleteById(entityId);
  }
}

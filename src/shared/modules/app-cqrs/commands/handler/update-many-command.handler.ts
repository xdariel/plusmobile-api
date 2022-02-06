import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { IEntity } from 'src/shared/core/interfaces/IEntity';
import { IEntityService } from 'src/shared/core/interfaces/IEntityService';
import { UpdateManyCommand } from '../impl/update-many.command';

@CommandHandler(UpdateManyCommand)
export class UpdateManyCommandHandler<E extends IEntity> implements ICommandHandler<UpdateManyCommand<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string,
  ) {
  }

  async execute({
                  request: { filter: { where }, update },
                  contextId,
                  connection,
                }: UpdateManyCommand<E>): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    if (connection) {
      service.passConnection2Repo(connection);
    }
    return service.updateMany(update, where);
  }
}

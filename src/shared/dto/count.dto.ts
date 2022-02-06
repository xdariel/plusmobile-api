import { IEntity } from '../core/interfaces/IEntity';
import { IRepositoryFilter } from '../core/interfaces/IRepository';

export type CountDto<T extends IEntity> = {
  where?: IRepositoryFilter<T>
}
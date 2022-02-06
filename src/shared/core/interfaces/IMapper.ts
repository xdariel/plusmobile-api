import { IEntity } from './IEntity';
import { BaseInput } from '../../dto/base-input.dto';
import { BaseResponse } from '../../dto/base-response.dto';


export interface IMapper<Entity extends IEntity> {
  persistent2Dto(persistentEntity: Entity): any | Promise<any>;

  dtoInput2Persistent<DTO>(dto: DTO): Entity | Promise<Entity>;

  dtoResponse2Persistent<DTO>(dto: DTO): Entity | Promise<Entity>;
}




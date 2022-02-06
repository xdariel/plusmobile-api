import { FilesEntity } from '../entities/files.entity';

import { Injectable } from '@nestjs/common';
import { FilesResponse } from '../graphql/dto/responses/files.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesInput } from '../graphql/dto/inputs/create-files.input';

@Injectable()
export class FilesMapper implements BaseMapper<FilesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesInput>(dto: CreateFilesInput): FilesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesResponse>(dto: FilesResponse): FilesEntity {
    throw new Error('Not Implementation')
  }


  persistent2Dto(persistentEntity: FilesEntity): FilesResponse {
    return {
      ...persistentEntity,
      createdBy: persistentEntity?.createdBy ? { id: persistentEntity.createdBy } : undefined,
      updatedBy: persistentEntity?.updatedBy ? { id: persistentEntity.updatedBy } : undefined,
    };
  }

}

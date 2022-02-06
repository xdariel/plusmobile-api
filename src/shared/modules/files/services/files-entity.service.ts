import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesEntity } from '../entities/files.entity';
import { FilesRepository } from '../repositories/files.repository';
import { DB_USER } from '../../data-access/availabe-data-access.providers';
import { DBUser } from '../../data-access/types/db-user.type';


@Injectable()
export class FilesEntityService extends BaseEntityService<FilesEntity> {
  constructor(private readonly _filesRepo: FilesRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_filesRepo, FilesEntity.name, dbUser);
  }




}

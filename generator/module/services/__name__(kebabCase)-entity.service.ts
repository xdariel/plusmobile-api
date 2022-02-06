import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { __name__Entity } from '../entities/__name__(kebabCase).entity';
import { __name__Repository } from '../repositories/__name__(kebabCase).repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';


@Injectable()
export class __name__EntityService extends BaseEntityService<__name__Entity> {
  constructor(private readonly ___name__CamelCase__Repo: __name__Repository, @Inject(DB_USER)  dbUser: DBUser) {
    super(___name__CamelCase__Repo, __name__Entity.name, dbUser);
  }




}

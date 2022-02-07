import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from '../repositories/category.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';


@Injectable()
export class CategoryEntityService extends BaseEntityService<CategoryEntity> {
  constructor(private readonly _categoryRepo: CategoryRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_categoryRepo, CategoryEntity.name, dbUser);
  }




}

import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { NotificationEntity } from '../entities/notification.entity';
import { NotificationRepository } from '../repositories/notification.repository';
import { DB_USER } from '../../data-access/availabe-data-access.providers';
import { DBUser } from '../../data-access/types/db-user.type';


@Injectable()
export class NotificationEntityService extends BaseEntityService<NotificationEntity> {
  constructor(private readonly _notificationRepo: NotificationRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_notificationRepo, NotificationEntity.name, dbUser);
  }

}

import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { SupportTicketEntity } from '../entities/support-ticket.entity';
import { SupportTicketRepository } from '../repositories/support-ticket.repository';
import { DB_USER } from 'src/shared/modules/data-access/availabe-data-access.providers';
import { DBUser } from 'src/shared/modules/data-access/types/db-user.type';


@Injectable()
export class SupportTicketEntityService extends BaseEntityService<SupportTicketEntity> {
  constructor(private readonly _supportTicketRepo: SupportTicketRepository, @Inject(DB_USER)  dbUser: DBUser) {
    super(_supportTicketRepo, SupportTicketEntity.name, dbUser);
  }




}

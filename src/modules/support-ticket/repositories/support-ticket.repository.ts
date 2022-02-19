import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SupportTicketEntity } from '../entities/support-ticket.entity';

@Injectable()
export class SupportTicketRepository extends BaseRepository<SupportTicketEntity, FilterableFieldsType<SupportTicketEntity>> {
  constructor(
    @Inject(SupportTicketEntity.name) private readonly _supportTicketModel: Model<SupportTicketEntity>,
  ) {
    super(_supportTicketModel, SupportTicketRepository.name);
  }
}

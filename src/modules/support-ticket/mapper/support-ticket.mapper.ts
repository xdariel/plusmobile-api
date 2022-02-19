import { SupportTicketEntity } from '../entities/support-ticket.entity';

import { Injectable } from '@nestjs/common';
import { SupportTicketResponse } from '../graphql/dto/responses/support-ticket.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateSupportTicketInput } from '../graphql/dto/inputs/create-support-ticket.input';

@Injectable()
export class SupportTicketMapper implements BaseMapper<SupportTicketEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateSupportTicketInput>(dto: CreateSupportTicketInput): SupportTicketEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = SupportTicketResponse>(dto: SupportTicketResponse): SupportTicketEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ updatedBy, createdBy, ...rest }: SupportTicketEntity): SupportTicketResponse {
    return {
      ...rest,
      createdBy: createdBy ? { id: createdBy } : undefined,
      updatedBy: updatedBy ? { id: updatedBy } : undefined,
    };
  }

}

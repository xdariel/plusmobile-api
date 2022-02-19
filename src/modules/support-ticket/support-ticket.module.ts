import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { SupportTicketFeature } from './entities/support-ticket.entity';
import { SupportTicketRepository } from './repositories/support-ticket.repository';
import { SupportTicketCommandHandlers } from './cqrs/commands';

import { SupportTicketMapper } from './mapper/support-ticket.mapper';
import { SupportTicketResolver } from './graphql/resolvers/support-ticket.resolver';
import { SupportTicketQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { SupportTicketEntityService } from './services/support-ticket-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([SupportTicketFeature]),

    SupportTicketMapper,
    SupportTicketResolver,
    SupportTicketRepository,
    SupportTicketEntityService,
    SupportTicketResolver,
    ...SupportTicketCommandHandlers,
    ...SupportTicketQueryHandlers,
  ],

})
export class SupportTicketModule {

}

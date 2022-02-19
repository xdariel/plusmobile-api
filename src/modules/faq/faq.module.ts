import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FaqFeature } from './entities/faq.entity';
import { FaqRepository } from './repositories/faq.repository';
import { FaqCommandHandlers } from './cqrs/commands';

import { FaqMapper } from './mapper/faq.mapper';
import { FaqResolver } from './graphql/resolvers/faq.resolver';
import { FaqQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FaqEntityService } from './services/faq-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FaqFeature]),

    FaqMapper,
    FaqResolver,
    FaqRepository,
    FaqEntityService,
    FaqResolver,
    ...FaqCommandHandlers,
    ...FaqQueryHandlers,
  ],
  exports:[
    FaqRepository
  ]
})
export class FaqModule {

}

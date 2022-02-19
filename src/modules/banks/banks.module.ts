import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { BanksFeature } from './entities/banks.entity';
import { BanksRepository } from './repositories/banks.repository';
import { BanksCommandHandlers } from './cqrs/commands';

import { BanksMapper } from './mapper/banks.mapper';
import { BanksResolver } from './graphql/resolvers/banks.resolver';
import { BanksQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { BanksEntityService } from './services/banks-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([BanksFeature]),

    BanksMapper,
    BanksResolver,
    BanksRepository,
    BanksEntityService,
    BanksResolver,
    ...BanksCommandHandlers,
    ...BanksQueryHandlers,
  ],

})
export class BanksModule {

}

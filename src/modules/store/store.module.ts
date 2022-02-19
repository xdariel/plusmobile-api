import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { StoreFeature } from './entities/store.entity';
import { StoreRepository } from './repositories/store.repository';
import { StoreCommandHandlers } from './cqrs/commands';

import { StoreMapper } from './mapper/store.mapper';
import { StoreResolver } from './graphql/resolvers/store.resolver';
import { StoreQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { StoreEntityService } from './services/store-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([StoreFeature]),

    StoreMapper,
    StoreResolver,
    StoreRepository,
    StoreEntityService,
    StoreResolver,
    ...StoreCommandHandlers,
    ...StoreQueryHandlers,
  ],

})
export class StoreModule {

}

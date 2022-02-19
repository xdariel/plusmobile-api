import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { VendorsFeature } from './entities/vendors.entity';
import { VendorsRepository } from './repositories/vendors.repository';
import { VendorsCommandHandlers } from './cqrs/commands';

import { VendorsMapper } from './mapper/vendors.mapper';
import { VendorsResolver } from './graphql/resolvers/vendors.resolver';
import { VendorsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { VendorsEntityService } from './services/vendors-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([VendorsFeature]),

    VendorsMapper,
    VendorsResolver,
    VendorsRepository,
    VendorsEntityService,
    VendorsResolver,
    ...VendorsCommandHandlers,
    ...VendorsQueryHandlers,
  ],

})
export class VendorsModule {

}

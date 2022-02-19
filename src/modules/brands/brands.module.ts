import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { BrandsFeature } from './entities/brands.entity';
import { BrandsRepository } from './repositories/brands.repository';
import { BrandsCommandHandlers } from './cqrs/commands';

import { BrandsMapper } from './mapper/brands.mapper';
import { BrandsResolver } from './graphql/resolvers/brands.resolver';
import { BrandsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { BrandsEntityService } from './services/brands-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([BrandsFeature]),

    BrandsMapper,
    BrandsResolver,
    BrandsRepository,
    BrandsEntityService,
    BrandsResolver,
    ...BrandsCommandHandlers,
    ...BrandsQueryHandlers,
  ],

})
export class BrandsModule {

}

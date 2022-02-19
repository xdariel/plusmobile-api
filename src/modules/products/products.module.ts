import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ProductsFeature } from './entities/products.entity';
import { ProductsRepository } from './repositories/products.repository';
import { ProductsCommandHandlers } from './cqrs/commands';

import { ProductsMapper } from './mapper/products.mapper';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ProductsEntityService } from './services/products-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ProductsFeature]),

    ProductsMapper,
    ProductsResolver,
    ProductsRepository,
    ProductsEntityService,
    ProductsResolver,
    ...ProductsCommandHandlers,
    ...ProductsQueryHandlers,
  ],

})
export class ProductsModule {

}

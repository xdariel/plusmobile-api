import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { CategoryFeature } from './entities/category.entity';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryCommandHandlers } from './cqrs/commands';

import { CategoryMapper } from './mapper/category.mapper';
import { CategoryResolver } from './graphql/resolvers/category.resolver';
import { CategoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { CategoryEntityService } from './services/category-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([CategoryFeature]),

    CategoryMapper,
    CategoryResolver,
    CategoryRepository,
    CategoryEntityService,
    CategoryResolver,
    ...CategoryCommandHandlers,
    ...CategoryQueryHandlers,
  ],

})
export class CategoryModule {

}

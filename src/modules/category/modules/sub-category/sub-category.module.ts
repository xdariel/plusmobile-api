import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { SubCategoryFeature } from './entities/sub-category.entity';
import { SubCategoryRepository } from './repositories/sub-category.repository';
import { SubCategoryCommandHandlers } from './cqrs/commands';

import { SubCategoryMapper } from './mapper/sub-category.mapper';
import { SubCategoryResolver } from './graphql/resolvers/sub-category.resolver';
import { SubCategoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { SubCategoryEntityService } from './services/sub-category-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([SubCategoryFeature]),

    SubCategoryMapper,
    SubCategoryResolver,
    SubCategoryRepository,
    SubCategoryEntityService,
    SubCategoryResolver,
    ...SubCategoryCommandHandlers,
    ...SubCategoryQueryHandlers,
  ],
  exports:[
    SubCategoryRepository
  ]

})
export class SubCategoryModule {

}

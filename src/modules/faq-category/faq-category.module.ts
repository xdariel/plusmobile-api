import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FaqCategoryFeature } from './entities/faq-category.entity';
import { FaqCategoryRepository } from './repositories/faq-category.repository';
import { FaqCategoryCommandHandlers } from './cqrs/commands';

import { FaqCategoryMapper } from './mapper/faq-category.mapper';
import { FaqCategoryResolver } from './graphql/resolvers/faq-category.resolver';
import { FaqCategoryQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FaqCategoryEntityService } from './services/faq-category-entity.service';
import { FaqModule } from '../faq/faq.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
    FaqModule
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FaqCategoryFeature]),

    FaqCategoryMapper,
    FaqCategoryResolver,
    FaqCategoryRepository,
    FaqCategoryEntityService,
    FaqCategoryResolver,
    ...FaqCategoryCommandHandlers,
    ...FaqCategoryQueryHandlers,
  ],

})
export class FaqCategoryModule {

}

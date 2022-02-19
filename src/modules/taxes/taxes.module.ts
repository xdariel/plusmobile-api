import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { TaxesFeature } from './entities/taxes.entity';
import { TaxesRepository } from './repositories/taxes.repository';
import { TaxesCommandHandlers } from './cqrs/commands';

import { TaxesMapper } from './mapper/taxes.mapper';
import { TaxesResolver } from './graphql/resolvers/taxes.resolver';
import { TaxesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { TaxesEntityService } from './services/taxes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([TaxesFeature]),

    TaxesMapper,
    TaxesResolver,
    TaxesRepository,
    TaxesEntityService,
    TaxesResolver,
    ...TaxesCommandHandlers,
    ...TaxesQueryHandlers,
  ],

})
export class TaxesModule {

}

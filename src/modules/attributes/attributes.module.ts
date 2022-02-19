import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { AttributesFeature } from './entities/attributes.entity';
import { AttributesRepository } from './repositories/attributes.repository';
import { AttributesCommandHandlers } from './cqrs/commands';

import { AttributesMapper } from './mapper/attributes.mapper';
import { AttributesResolver } from './graphql/resolvers/attributes.resolver';
import { AttributesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { AttributesEntityService } from './services/attributes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([AttributesFeature]),

    AttributesMapper,
    AttributesResolver,
    AttributesRepository,
    AttributesEntityService,
    AttributesResolver,
    ...AttributesCommandHandlers,
    ...AttributesQueryHandlers,
  ],

})
export class AttributesModule {

}

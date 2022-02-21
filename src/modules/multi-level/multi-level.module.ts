import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { MultiLevelMapper } from './mapper/multi-level.mapper';
import { MultiLevelResolver } from './graphql/resolvers/multi-level.resolver';
import { MultiLevelQueryHandlers } from './cqrs/queries';

import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { AppMultiLevelService } from './services/app-multi-level.service';
import { UserModule } from '../../shared/modules/user/user.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    AppCqrsModule,
    UserModule
  ],
  providers: [
    MultiLevelMapper,
    MultiLevelResolver,
    AppMultiLevelService,
    MultiLevelResolver,
    ...MultiLevelQueryHandlers,
  ],
})
export class MultiLevelModule {

}

import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DiscountCouponFeature } from './entities/discount-coupon.entity';
import { DiscountCouponRepository } from './repositories/discount-coupon.repository';
import { DiscountCouponCommandHandlers } from './cqrs/commands';

import { DiscountCouponMapper } from './mapper/discount-coupon.mapper';
import { DiscountCouponResolver } from './graphql/resolvers/discount-coupon.resolver';
import { DiscountCouponQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DiscountCouponEntityService } from './services/discount-coupon-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DiscountCouponFeature]),

    DiscountCouponMapper,
    DiscountCouponResolver,
    DiscountCouponRepository,
    DiscountCouponEntityService,
    DiscountCouponResolver,
    ...DiscountCouponCommandHandlers,
    ...DiscountCouponQueryHandlers,
  ],

})
export class DiscountCouponModule {

}

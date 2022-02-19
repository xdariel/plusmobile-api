import { Module } from '@nestjs/common';
import { AppConfigService } from './shared/modules/config/service/app-config-service';
import { DataAccessModule } from './shared/modules/data-access/data-access.module';
import { AppGraphqlModule } from './shared/modules/graphql/graphql.module';
import { TenantModule } from './shared/modules/tenant/tenant.module';
import { UserModule } from './shared/modules/user/user.module';
import { AuthModule } from './shared/modules/auth/auth.module';
import { FilesModule } from './shared/modules/files/files.module';
import { NotificationModule } from './shared/modules/notification/notification.module';

import { FixturesModule } from './shared/modules/fixtures/fixtures.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandsModule } from './modules/brands/brands.module';
import { TaxesModule } from './modules/taxes/taxes.module';
import { BanksModule } from './modules/banks/banks.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { StoreModule } from './modules/store/store.module';
import { ProductsModule } from './modules/products/products.module';
import { AttributesModule } from './modules/attributes/attributes.module';
import { MembershipModule } from './modules/membership/membership.module';
import { FaqCategoryModule } from './modules/faq-category/faq-category.module';





@Module({
  imports: [
    AppConfigService,
    AppGraphqlModule,
    DataAccessModule,
    TenantModule,
    UserModule,
    AuthModule,
    FilesModule,
    NotificationModule,
    FixturesModule,
    CategoryModule,
    BrandsModule,
    TaxesModule,
    BanksModule,
    VendorsModule,
    StoreModule,
    ProductsModule,
    AttributesModule,
    MembershipModule,
    FaqCategoryModule
    
   
  

  ],

  controllers: [],
  providers: [],
})
export class AppModule {
}

import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PdfGeneratorService } from './services/PdfGeneratorService';
import { AppConfigModule } from '../config/app-config.module';
import { AppReportsController } from './controllers/app-reports.controller';
import { AppReportsQueryHandlers } from './cqrs/queries';
import { TenantModule } from '../tenant/tenant.module';

@Global()
@Module({
  imports: [
    CqrsModule,
    AppConfigModule,
    TenantModule
  ],
  providers: [PdfGeneratorService, ...AppReportsQueryHandlers],
  controllers: [AppReportsController],
  exports: [PdfGeneratorService],
})
export class AppReportsModule {
}
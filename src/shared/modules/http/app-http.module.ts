import { Global, Logger, Module, OnModuleInit } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppConfigModule } from '../config/app-config.module';
import { AppConfigService } from '../config/service/app-config-service';


@Global()
@Module({
  imports: [
    AppConfigModule,
    HttpModule.registerAsync({
      inject: [AppConfigService],
      useFactory: (_config: AppConfigService) => ({
        baseURL: _config.externalApi.urlBase,
        headers: {
          'X-API-KEY': _config.externalApi.apiKey
        }
      }),
    })

  ],
  providers: [HttpService],
  exports: [HttpService],
})
export class AppHttpModule implements OnModuleInit {

  //constructor(private _httpService: HttpService) {  }


  onModuleInit() {
    /*this._httpService.axiosRef.interceptors.request.use((config) => {
      Logger.debug(`Send ${config.method} request, to: ${config.url}`, AppHttpModule.name)
      return config;
    })*/


  }

}
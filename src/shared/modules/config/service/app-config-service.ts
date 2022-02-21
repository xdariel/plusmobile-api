import { Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDataBaseConfig } from '../interfaces/IDataBaseConfig';
import { IAppConfig } from '../interfaces/IAppConfig';
import { IGraphqlConfig } from '../interfaces/IGraphqlConfig';
import { IMessageConfig } from '../interfaces/IMessageConfig';
import { IRedisConfig } from '../interfaces/IRedisConfig';
import { IAWSConfig } from '../interfaces/IAWSConfig';
import { IExternalAPI } from '../interfaces/IExternalAPI';
import { IReportConfig } from '../interfaces/IReportConfig';

const logLevels: LogLevel[] = ['verbose', 'debug', 'log', 'warn', 'error'];

function getLogLevel(level: string): LogLevel[] {
  const lvlIndex = logLevels.findIndex(ll => ll === level);
  return logLevels.filter((ll: LogLevel, index: number) => {
    if (lvlIndex <= index) return ll;
  });
}

@Injectable()
export class AppConfigService {
  constructor(private readonly _configService: ConfigService) {
  }

  processBoolean(value?: string | boolean): boolean {
    if (!value) {
      return false;
    }
    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'string') {
      return value === 'true';
    }
    return false;

  }

  get app(): IAppConfig {
    return {
      cors: this.processBoolean(this._configService.get<boolean>('app.cors')),
      port: this._configService.get<number>('app.port'),
      nodeEnv: this._configService.get<string>('app.nodeEnv'),
      logLevel: getLogLevel(this._configService.get<string>('app.logLevel')),
      jwtSecret: this._configService.get<string>('app.jwtSecret'),
      jwtExpiration: this._configService.get<string>('app.jwtExpiration'),
      frontDomain: this._configService.get<string>('app.frontDomain'),
      name: this._configService.get<string>('app.name', 'dddApp'),
      multiTenant: this.processBoolean(this._configService.get<boolean>('app.multiTenant', false)),
      apiKey: this._configService.get<string>('app.apiKey'),
    };

  };

  get database(): IDataBaseConfig {
    return {
      connectString: this._configService.get<string>('database.connectString'),
      mainDbName: this._configService.get<string>('database.mainDbName'),
      getTenantConnectString(dbName?: string): string {
        if (!dbName) {
          dbName = this.mainDbName;
        }
        return String(this.connectString).replace(
          '[[dbname]]',
          dbName,
        );
      },
    };
  };

  get graphql(): IGraphqlConfig {
    return {
      schema: this._configService.get<string>('graphql.schema'),
      maxFiles: this._configService.get<number>('graphql.maxFiles'),
      maxFileSize: this._configService.get<number>('graphql.maxFileSize'),
      depthLimit: this._configService.get<number>('graphql.depthLimit'),
    };
  };

  get smtp(): IMessageConfig {
    return {
      host: this._configService.get<string>('message.host'),
      port: this._configService.get<number>('message.port'),
      user: this._configService.get<string>('message.email'),
      pass: this._configService.get<string>('message.password'),
      emailValidationUrl: this._configService.get<string>('message.emailValidationUrl'),
      emailTemplatePath: this._configService.get<string>('message.emailTemplatePath'),
    };
  };

  get redis(): IRedisConfig {
    return {
      host: this._configService.get<string>('redis.host'),
      port: this._configService.get<number>('redis.port'),
      password: this._configService.get<string>('redis.password'),
    };
  };

  get aws(): IAWSConfig {
    return {
      keyId: this._configService.get<string>('aws.keyId'),
      keySecret: this._configService.get<string>('aws.keySecret'),
      bucket: this._configService.get<string>('aws.bucket'),
      region: this._configService.get<string>('aws.region'),
      cdnUrl: this._configService.get<string>('aws.cdnUrl'),
    };
  };

  get externalApi(): IExternalAPI {
    return {
      apiKey: this._configService.get<string>('externalApi.apiKey'),
      urlBase: this._configService.get<string>('externalApi.urlBase'),
      apiWebApp: this._configService.get<string>('externalApi.apiWebApp'),
    };
  };

  get reports(): IReportConfig {
    return {
      fontPath: this._configService.get<string>('reports.fontPath'),
    };
  };
}

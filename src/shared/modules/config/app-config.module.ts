import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AppConfigService } from './service/app-config-service';
import { appConfig, appSchema } from './namespaces/app.config';
import { databaseSchema, databaseConfig } from './namespaces/database.config';
import { graphqlConfig, graphqlSchema } from './namespaces/graphql.config';
import { messageConfig, messageSchema } from './namespaces/message.config';
import { redisConfig, redisSchema } from './namespaces/redis.config';
import { awsConfig, awsSchema } from './namespaces/aws.config';
import { externalApiConfig, externalApiSchema } from './namespaces/external-api.config';
import { reportConfig, reportSchema } from './namespaces/report.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        graphqlConfig,
        messageConfig,
        redisConfig,
        awsConfig,
        externalApiConfig,
        reportConfig
      ],
      validationSchema: Joi.object({
        ...appSchema,
        ...databaseSchema,
        ...graphqlSchema,
        ...messageSchema,
        ...redisSchema,
        ...awsSchema,
        ...externalApiSchema,
        ...reportSchema
      }),
      validationOptions: { abortEarly: true },
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}

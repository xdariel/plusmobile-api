import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { IExternalAPI } from '../interfaces/IExternalAPI';

export const externalApiConfig = registerAs('externalApi', (): IExternalAPI => ({
  urlBase: process.env.EXTERNAL_API_URL_BASE,
  apiKey: process.env.EXTERNAL_API_KEY,
  apiWebApp: process.env.EXTERNAL_API_WEB_APP
}));

export const externalApiSchema = {
  EXTERNAL_API_KEY: Joi.string(),
  EXTERNAL_API_URL_BASE: Joi.string(),
};

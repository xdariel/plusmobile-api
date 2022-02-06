import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { IRedisConfig } from '../interfaces/IRedisConfig';
import { IReportConfig } from '../interfaces/IReportConfig';

export const reportConfig = registerAs('reports', (): IReportConfig => ({
  fontPath: process.env.FONT_PATH,
}));

export const reportSchema = {
  //FONT_PATH: Joi.string().required(),
};

import { GetPdfBufferQueryHandler } from './handler/get-pdf-buffer-query.handler';
import { Provider } from '@nestjs/common';

export const AppReportsQueryHandlers:Array<Provider> = [
  GetPdfBufferQueryHandler,

];

import { Get, Controller, Res, UseGuards, HttpStatus, Param, Inject, HttpCode, Header } from '@nestjs/common';

import { Response } from 'express';
import { PdfGeneratorService } from '../services/PdfGeneratorService';
import { Readable } from 'stream';
import { pdfTestTemplate } from '../templates/test.template';

@Controller('reports')
export class AppReportsController {
  constructor(private _pdfGenerator: PdfGeneratorService,
  ) {
  }

  @Get('test')
  async testPdf(string, @Res() resp: Response) {

    try {
      const docOrErr = await this._pdfGenerator.buildDocumentBuffer(await pdfTestTemplate.getDocDef({
        name: 'Dariel Noa',
      }));

      if (docOrErr.isFailure) {
        resp.status(HttpStatus.INTERNAL_SERVER_ERROR).send(docOrErr.unwrapError().message);

      }

      const { buffer, filename } = docOrErr.unwrap();
      const stream = new Readable();

      stream.push(buffer);
      stream.push(null);
      resp.set({
        'Content-Type': 'application/pdf',
        'Content-Length': buffer.length,
        'Content-Disposition': `attachment; filename=${filename}`,
      });
      stream.pipe(resp);
    } catch (err) {
      resp.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err?.toString());
    }
  }


}

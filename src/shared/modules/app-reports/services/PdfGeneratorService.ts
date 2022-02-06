import { Injectable } from '@nestjs/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AppConfigService } from '../../config/service/app-config-service';
import { join } from 'path';
import { TFontDictionary } from 'pdfmake/interfaces';
import { IDocDefinition } from '../interfaces/IDocDefinition';
import { Result } from 'src/shared/core/class/result';

import { IReportFile } from '../interfaces/IReportFile';
import { AppError } from '../../../core/errors/AppError';

global.XMLHttpRequest = require('xhr2');

@Injectable()
export class PdfGeneratorService {

  constructor(private readonly _appConfig: AppConfigService) {
    // @ts-ignore
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  private loadFonts(): TFontDictionary {
    const fontPath = join(this._appConfig.reports.fontPath, 'Roboto');
    return {
      Roboto: {
        normal: join(fontPath, 'Roboto-Regular.ttf'), //'../fonts/Roboto/Roboto-Regular.ttf',
        bold: join(fontPath, 'Roboto-Medium.ttf'), //'../fonts/Roboto/Roboto-Medium.ttf',
        italics: join(fontPath, 'Roboto-Italic.ttf'), //'../fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: join(fontPath, 'Roboto-MediumItalic.ttf'),//  '../fonts/Roboto/Roboto-MediumItalic.ttf',
      },

    };
  }

  buildDocumentBuffer(def: IDocDefinition, filename?: string): Promise<Result<IReportFile>> {
    return new Promise((resolve, reject) => {
      try {
        const document = pdfMake.createPdf({
            info: {
              author: this._appConfig.app.name,
              creator: 'Bioscenter Tecnology SAS',
              creationDate: new Date(),
            },
            ...def,
          },
          null,
          null,
          pdfFonts.pdfMake.vfs,
        );
        filename = filename ? filename : `pdf-document-${new Date().getDate()}.pdf`;
        document.getBuffer((buffer) => {
          resolve(Result.Ok({ buffer, filename }));
        });

      } catch (err) {
        reject(Result.Fail(new AppError.UnexpectedError(err)));
      }
    });
  }


}
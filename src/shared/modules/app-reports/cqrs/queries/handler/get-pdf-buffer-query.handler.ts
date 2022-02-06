import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetPdfBufferQuery } from '../impl/get-pdf-buffer.query';

import { ModuleRef } from '@nestjs/core';
import { IReportFile } from '../../../interfaces/IReportFile';
import { Result } from 'src/shared/core/class/result';

import { PdfGeneratorService } from '../../../services/PdfGeneratorService';

@QueryHandler(GetPdfBufferQuery)
export class GetPdfBufferQueryHandler implements IQueryHandler<GetPdfBufferQuery> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

  }

  async execute({ request: { def, filename }, contextId }: GetPdfBufferQuery): Promise<Result<IReportFile>> {
    const pdfService = await this._moduleRef.resolve(PdfGeneratorService, contextId as any);
    return pdfService.buildDocumentBuffer(def, filename);
  }

}

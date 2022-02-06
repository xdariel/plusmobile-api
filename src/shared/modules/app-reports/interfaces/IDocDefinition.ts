import { TDocumentDefinitions } from 'pdfmake/interfaces';

export interface IDocDefinition extends Omit<TDocumentDefinitions, 'info'
  | 'ownerPassword' | 'compress' | 'permissions' | 'userPassword'> {
}
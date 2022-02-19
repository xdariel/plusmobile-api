import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FaqErrors {
  const _context = 'FaqErrors';
  const messagesProvider = {
    en, es,
  };

  export class FaqWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FaqWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FaqFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FaqFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



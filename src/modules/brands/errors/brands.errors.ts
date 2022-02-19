import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace BrandsErrors {
  const _context = 'BrandsErrors';
  const messagesProvider = {
    en, es,
  };

  export class BrandsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'BrandsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class BrandsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'BrandsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



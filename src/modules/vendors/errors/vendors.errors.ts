import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace VendorsErrors {
  const _context = 'VendorsErrors';
  const messagesProvider = {
    en, es,
  };

  export class VendorsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'VendorsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class VendorsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'VendorsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }
  
  export class VendorsFieldInvalidValue extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'VendorsFieldInvalidValue',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }


}



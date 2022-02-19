import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace TaxesErrors {
  const _context = 'TaxesErrors';
  const messagesProvider = {
    en, es,
  };

  export class TaxesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'TaxesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class TaxesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'TaxesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

  export class TaxesFieldInvalidTax extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'TaxesFieldInvalidTax',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


